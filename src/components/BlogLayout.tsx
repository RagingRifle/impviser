import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Tag,
  Share2,
  ChevronUp,
  Linkedin,
  Copy,
  Check,
} from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";

interface TOCItem {
  id: string;
  text: string;
}

interface RelatedPost {
  title: string;
  excerpt: string;
  link: string;
  category: string;
  image: string;
}

interface BlogLayoutProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  heroImage: string;
  children: React.ReactNode;
  relatedPosts: RelatedPost[];
}

const BlogLayout = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  tags,
  heroImage,
  children,
  relatedPosts,
}: BlogLayoutProps) => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const articleRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Extract headings for TOC
  useEffect(() => {
    if (articleRef.current) {
      const headings = articleRef.current.querySelectorAll("h2[id]");
      const items: TOCItem[] = Array.from(headings).map((h) => ({
        id: h.id,
        text: h.textContent || "",
      }));
      setTocItems(items);
    }
  }, [children]);

  // Reading progress & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const article = articleRef.current;
      if (!article) return;

      const { top, height } = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = Math.max(
        0,
        Math.min(1, (-top) / (height - windowHeight))
      );
      setProgress(scrolled * 100);
      setShowBackToTop(window.scrollY > 600);

      // Active section
      const headings = article.querySelectorAll("h2[id]");
      let current = "";
      headings.forEach((h) => {
        const rect = h.getBoundingClientRect();
        if (rect.top <= 150) {
          current = h.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    const urls: Record<string, string> = {
      twitter: `https://x.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200">
        <motion.div
          className="h-full bg-gradient-to-r from-[#223794] to-[#29ec48]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <button
                  onClick={() => navigate("/insights")}
                  className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm font-medium">Back to Insights</span>
                </button>

                <span className="inline-block bg-[#223794] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  {category}
                </span>

                <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  {title}
                </h1>

                <p className="text-lg text-white/80 max-w-2xl mb-6">
                  {excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{readTime}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar — Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 space-y-6">
                {tocItems.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                      Table of Contents
                    </h3>
                    <nav className="space-y-1">
                      {tocItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                            activeSection === item.id
                              ? "bg-[#223794]/10 text-[#223794] font-semibold border-l-3 border-[#223794]"
                              : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                          }`}
                        >
                          {item.text}
                        </button>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Share Section */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                    <Share2 className="w-4 h-4 inline mr-2" />
                    Share
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex-1 p-3 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-200 flex items-center justify-center"
                      aria-label="Share on X"
                    >
                      <RiTwitterXLine className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex-1 p-3 bg-gray-50 hover:bg-[#0077b5] hover:text-white rounded-lg transition-all duration-200 flex items-center justify-center"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleCopyLink}
                      className={`flex-1 p-3 rounded-lg transition-all duration-200 flex items-center justify-center ${
                        copied
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-50 hover:bg-[#223794] hover:text-white"
                      }`}
                      aria-label="Copy link"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article
              ref={articleRef}
              className="lg:col-span-9 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12"
            >
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#223794] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800">
                {children}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-[#223794]/10 hover:text-[#223794] transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile share bar */}
              <div className="lg:hidden mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                  Share this article
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleShare("twitter")}
                    className="flex-1 p-3 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                    aria-label="Share on X"
                  >
                    <RiTwitterXLine className="w-4 h-4" />
                    <span className="text-sm">X</span>
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="flex-1 p-3 bg-gray-100 hover:bg-[#0077b5] hover:text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className={`flex-1 p-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                      copied
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 hover:bg-[#223794] hover:text-white"
                    }`}
                    aria-label="Copy link"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="text-sm">{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#223794] to-[#1a2b73]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get expert guidance from our certified consultants. Let's discuss
              how the right technology can accelerate your growth.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#223794] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Schedule a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <Link to={post.link} className="group block">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-4 left-4 bg-[#223794] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#223794] transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#223794] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1a2b73] transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

export default BlogLayout;
