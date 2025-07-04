---
layout: default
styles_file: styles-blog.css
permalink: blog.html
---

{% assign default_landing_data = site.data[site.active_lang].landing-web %} {% assign blog_posts = site.data[site.active_lang].blog-posts %}

<section class="cta">
  <div class="container">
  <h1>{{ default_landing_data.blog.title }}</h1>
  <p>{{ default_landing_data.blog.subtitle }}</p>
</div>
</section>

<section class="text-page">
    {% for post in blog_posts %}
    <div class="container">
  <div class="blog-post">
  <div class="blog-date">{{ post.published_on }}</div>
  <h2 class="blog-card-title blog-header">{{ post.title }}</h2>
  <div class="blog-subtitle">{{ post.subtitle }}</div>
  <div class="blog-content">{{ post.content | markdownify |
             replace: "android_url", site.android_url |
             replace: "windows_url", site.windows_url | 
             replace: "ios_url", site.ios_url |
             replace: "macos_url", site.macos_url |
             replace: "workspace_url", site.workspace_url |
             replace: "docs_url", site.docs_url |
             replace: "web_url", site.web_url |
             safeHTML }}</div>
</div>
</div>
    {% endfor %}
</section>
