import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BLOG_POSTS, formatBlogDate } from "@/content/blogPosts";

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog Pinggo pentru vanzari si operatiuni"
        description="Citeste articole practice despre raspuns rapid la leaduri, automatizari WhatsApp si procese de follow-up."
        path="/blog"
      />

      <Section canvas>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Blog Pinggo
          </p>
          <h1 className="mt-6 text-foreground">Articole si tactici practice</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Toate titlurile blogului sunt listate mai jos. Apasa pe un articol ca sa vezi pagina dedicata cu
            continutul complet.
          </p>
        </div>
      </Section>

      <Section alternate>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug}>
              <Card className="h-full border-border/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <CardHeader className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</p>
                  <CardTitle className="text-2xl leading-tight">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="link-underline text-foreground transition-colors hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {formatBlogDate(post.publishedAt)} • {post.readingTime}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Citeste articolul
                  </Link>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;
