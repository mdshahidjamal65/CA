import { useParams, NavLink } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-3">
          Article Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          The article you’re looking for may have been moved or updated.
        </p>
        <NavLink
          to="/blogs"
          className="text-blue-600 font-medium hover:underline"
        >
          ← Back to Insights & Articles
        </NavLink>
      </div>
    );
  }

  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-blue-100 mb-2">
            {blog.date}
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-16 prose prose-lg">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      {/* BACK TO BLOGS */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <NavLink
          to="/blogs"
          className="inline-flex items-center text-[#1D4ED8] font-medium hover:underline"
        >
          ← Back to Insights & Articles
        </NavLink>
      </div>
    </section>
  );
};

export default BlogDetail;
