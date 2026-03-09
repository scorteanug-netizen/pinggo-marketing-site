import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { buildArticleSchema } from "@/lib/structuredData";
import { formatBlogDate, getBlogPostBySlug } from "@/content/blogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug === "cat-costa-un-lead-pierdut" || slug === "cat-costa-un-lead-pierdut-romania") {
    return <Navigate to="/blog/cat-costa-un-lead-pierdut" replace />;
  }

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const path = `/blog/${post.slug}`;
  const articleSchema = buildArticleSchema({
    headline: post.title,
    description: post.excerpt,
    authorName: post.author,
    datePublished: post.publishedAt,
    path,
  });

  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={path}
        type="article"
        structuredData={articleSchema}
      />

      <Section canvas>
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary/80">
            ← Înapoi la Blog
          </Link>
          <p className="mt-6 text-sm font-medium text-muted-foreground">
            {post.category} • {formatBlogDate(post.publishedAt)} • {post.readingTime}
          </p>
          <h1 className="mt-4 text-foreground">{post.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        </div>
      </Section>

      <Section alternate>
        <article className="mx-auto max-w-3xl space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-background p-8 text-center shadow-sm">
          <h2 className="text-3xl font-extrabold text-foreground">Vrei să aplici același proces în echipa ta?</h2>
          <p className="mt-4 text-muted-foreground">
            Programează un demo și vezi cum arată fluxul complet pentru leadurile tale.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/contact">Solicită demo</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPost;
