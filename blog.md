---
layout: default
styles_file: styles-blog.css
permalink: blog.html
---

{% assign default_landing_data = site.data[site.active_lang].landing-workspace-default %}
{% assign blog_posts = site.data[site.active_lang].blog-posts %}

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
            <div class="blog-content">{{ post.content | markdownify }}</div>
        </div>
    </div>
    {% endfor %}
</section>