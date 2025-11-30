# Next.js (App Router) SEO 最適化ルール

このファイルは、Next.js (App Router) での SEO 最適化に関する包括的なガイドラインを定義します。すべての実装は、検索エンジンに正しく伝わる初期 HTML（SSR/SSG/RSC）を優先し、Core Web Vitals を合格水準に維持することを目標とします。

## 目標

- **検索エンジン最適化**: SSR/SSG/RSC により正しい初期 HTML を生成し、検索エンジンに適切な情報を提供します。
- **Core Web Vitals**: LCP、CLS、INP を合格水準に維持します。
- **包括的なメタデータ**: ページごとのメタデータ、構造化データ、内部リンク、サイトマップ/robots、i18n/hreflang を正しく実装します。
- **パフォーマンス**: サードパーティスクリプト、画像最適化、コード分割でブロッキングを抑制します。

## レンダリング戦略

### Server Components 優先

- **既定**: Server Components（App Router）で実装します。
- **CSR 制限**: ログイン、個別ダッシュボード等 SEO 非優先機能に限定します。
- **静的コンテンツ**: SSG/ISR（`revalidate`）を提案します。頻繁更新コンテンツは SSR を使用します。
- **fetch 設定**: `cache`/`no-store`/`revalidate` を適切に設定します。

### データ取得タイミングの明記

実装時は、各データが以下のどのタイミングで取得されるかを必ず明記してください。

- **ビルド時**: 静的生成（SSG）で取得
- **リクエスト時**: サーバーサイドレンダリング（SSR）で取得
- **クライアント時**: クライアントサイドで取得

**理由**: レンダリング戦略の選択理由を説明し、SEO への影響を明確にします。

## メタデータ（Metadata API）

### 完全なメタデータ設定

各 `page` または `layout` で `metadata` または `generateMetadata` を使用し、以下を完全に設定します。

- `title`: ページタイトル（50-60 文字推奨）
- `description`: メタディスクリプション（150-160 文字推奨）
- `canonical`: 正規 URL
- `openGraph`: OGP メタタグ（title、description、images、url、type）
- `twitter`: Twitter Cards（card、title、description、images）

### 動的メタデータ生成

```typescript
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await fetchData(params.id);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [{ url: data.imageUrl }],
    },
  };
}
```

### 禁止事項

- メタデータの欠落
- 重複した `title`
- 薄い、または汎用的すぎる `description`
- ルーティングパラメータを無視した静的メタデータ

## 画像/スクリプト最適化

### next/image の使用

```typescript
import Image from "next/image";

<Image
  src="/path/to/image.webp"
  alt="具体的な説明文"
  width={800}
  height={600}
  priority={isLCPImage} // LCP 対象画像のみ
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 画像最適化要件

- **必須属性**: `width`、`height`、`alt` を必ず指定します。
- **LCP 対象**: `priority` プロパティを設定します。
- **形式**: WebP 等の最適化形式を使用します。
- **レスポンシブ**: `sizes` プロパティで適切な画像サイズを指定します。

### next/script の使用

```typescript
import Script from "next/script";

<Script
  src="https://example.com/script.js"
  strategy="afterInteractive" // または lazyOnload、beforeInteractive、worker
/>
```

### スクリプト戦略

- `afterInteractive`: ページがインタラクティブになった後に読み込み（デフォルト）
- `lazyOnload`: ブラウザのアイドル時に読み込み
- `beforeInteractive`: ページがインタラクティブになる前に読み込み（重要なスクリプトのみ）
- `worker`: Web Worker で実行（実験的機能）

### コード分割

```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("~/components/heavy-component"), {
  loading: () => <p>Loading...</p>,
  ssr: false, // SEO 不要な重いコンポーネントの場合
});
```

## 構造化データ（JSON-LD）

### JSON-LD の実装

ページタイプに応じて適切な JSON-LD を `head` へ挿入します。

```typescript
export default function ArticlePage({ article }: { article: Article }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    image: article.imageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ページコンテンツ */}
    </>
  );
}
```

### 対応スキーマタイプ

- `Article`: ブログ記事、ニュース
- `Product`: 商品ページ
- `FAQPage`: FAQ ページ
- `LocalBusiness`: ローカルビジネス
- `BreadcrumbList`: パンくずリスト
- その他、ページタイプに応じた適切なスキーマ

### 検証方法

- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

## サイトマップ/robots

### 動的サイトマップ生成

```typescript
// app/sitemap.xml/route.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchAllPosts();

  const postUrls = posts.map((post) => ({
    url: `https://example.com/posts/${post.id}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://example.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...postUrls,
  ];
}
```

### robots.txt の設定

```typescript
// app/robots.txt/route.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: "https://example.com/sitemap.xml",
  };
}
```

### 要件

- **Sitemap ディレクティブ**: `robots.txt` に必ず含めます。
- **除外ルール**: インデックス除外パスを明確に定義します。
- **更新トリガ**: コンテンツ追加時の再生成方法を明記します。

## i18n/hreflang

### next.config.js の設定

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["ja", "en", "zh"],
    defaultLocale: "ja",
    localeDetection: true,
  },
};

export default nextConfig;
```

### hreflang の実装

```typescript
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://example.com/${params.locale}`,
      languages: {
        ja: "https://example.com/ja",
        en: "https://example.com/en",
        zh: "https://example.com/zh",
        "x-default": "https://example.com/ja",
      },
    },
  };
}
```

### URL 設計

- **パスベース**: `/ja/`, `/en/`, `/zh/`（推奨）
- **サブドメイン**: `ja.example.com`, `en.example.com`
- **正規化**: 重複コンテンツを避けるため、`canonical` と `hreflang` を適切に設定します。

## 内部リンク/情報設計

### next/link の使用

```typescript
import Link from "next/link";

// ✅ 正しい実装
<Link href="/about">About</Link>

// ❌ 禁止: クリックイベントのみの遷移
<div onClick={() => router.push("/about")}>About</div>
```

### アンカーテキスト

- **意図明確**: リンク先の内容が分かるテキストを使用します。
- **キーワード適合**: SEO 対象キーワードを含めます。
- **禁止**: "こちら"、"クリック" 等の汎用的なテキスト

### パンくずリスト

```typescript
export default function ProductPage({ product }: { product: Product }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://example.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.category,
        item: `https://example.com/category/${product.categoryId}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://example.com/products/${product.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* パンくず UI */}
    </>
  );
}
```

## パフォーマンスと計測

### Core Web Vitals 改善策

#### LCP (Largest Contentful Paint)

- LCP 対象画像に `priority` 属性を設定
- フォントの最適化（`next/font` の使用）
- サーバーレスポンスタイムの改善

#### CLS (Cumulative Layout Shift)

- 画像に `width` と `height` を必ず指定
- フォント読み込み時のレイアウトシフト防止（`font-display: swap` 回避）
- 動的コンテンツの領域確保

#### INP (Interaction to Next Paint)

- 重いイベントハンドラの最適化
- 不要な再レンダリングの削減（`React.memo`、`useMemo`、`useCallback`）
- コード分割とレイジーロード

### reportWebVitals の導入

```typescript
// app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### 計測と検証

- **Google Search Console**: インデックス状況、検索パフォーマンスの確認
- **PageSpeed Insights**: Core Web Vitals の計測
- **Lighthouse**: 総合的なパフォーマンス評価
- **Web Vitals Extension**: リアルタイムでの Core Web Vitals 確認

## アクセシビリティ/品質

### 必須要件

- **alt 属性**: すべての画像に適切な代替テキストを設定
- **label/ARIA**: フォーム要素に適切なラベルを設定
- **ランドマーク**: `<header>`、`<nav>`、`<main>`、`<footer>` 等のセマンティック HTML を使用
- **見出し構造**: `<h1>` から順序正しく使用

### 重複排除

```typescript
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://example.com/page",
  },
};
```

### エラーページ

```typescript
// app/not-found.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません | サイト名",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しません。</p>
    </div>
  );
}
```

## 出力形式

実装を提案する際は、以下の情報を必ず含めてください。

### 1. 変更ファイル一覧

```markdown
- `app/page.tsx`: メタデータの追加
- `app/sitemap.xml/route.ts`: サイトマップの動的生成
- `app/robots.txt/route.ts`: robots.txt の設定
```

### 2. 差分

各ファイルの変更内容を明示します。

### 3. 生成理由

なぜこの変更が必要か、SEO への影響を説明します。

### 4. 検証手順

#### 手動検証

- ブラウザでページソースを表示し、メタタグの確認
- Rich Results Test で構造化データの検証
- Lighthouse でパフォーマンス計測

#### 自動検証

```typescript
// E2E テスト例（Playwright）
test("メタタグが正しく設定されている", async ({ page }) => {
  await page.goto("/");

  const title = await page.title();
  expect(title).toBe("期待されるタイトル");

  const description = await page
    .locator('meta[name="description"]')
    .getAttribute("content");
  expect(description).toBeTruthy();
});
```

## 禁止事項

以下の実装は SEO に悪影響を及ぼすため、厳禁とします。

- ❌ SEO 重要ページでの過度な CSR
- ❌ メタデータ未設定
- ❌ クリックイベントのみでの遷移（`next/link` を使用しない）
- ❌ 未最適化の画像/スクリプト（`width`/`height` 未指定、`priority` 未設定）
- ❌ 誤った構造化データ（必須プロパティの欠落）
- ❌ サイトマップ/robots の不備
- ❌ Core Web Vitals を悪化させる変更

## 実装チェックリスト

### ページ作成時

- [ ] `metadata` または `generateMetadata` を実装
- [ ] `title` と `description` を適切に設定
- [ ] OGP と Twitter Cards を設定
- [ ] 構造化データ（JSON-LD）を追加
- [ ] 画像に `width`、`height`、`alt` を設定
- [ ] 内部リンクに `next/link` を使用
- [ ] Server Components で実装（CSR が必要な場合は理由を明記）

### サイト全体

- [ ] サイトマップを動的生成
- [ ] `robots.txt` を設定
- [ ] i18n/hreflang を実装（多言語サイトの場合）
- [ ] `reportWebVitals` を導入
- [ ] Core Web Vitals を計測・改善

### リリース前

- [ ] Google Search Console に登録
- [ ] PageSpeed Insights で計測
- [ ] Lighthouse で総合評価
- [ ] Rich Results Test で構造化データを検証
- [ ] モバイルフレンドリーテストを実施

## まとめ

このルールに従い、課題・要件・既存コードを受け取った際は、最適なレンダリング/メタデータ/構造化データ/内部リンク/サイトマップ/robots/i18n/パフォーマンスの変更案を、根拠と検証手順を伴って提案・実装してください。

