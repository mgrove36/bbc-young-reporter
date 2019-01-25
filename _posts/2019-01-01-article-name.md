---
title: Title1
description: An article description1
layout: article
categories: articles
date: 2019-01-01 7:01
authors: Name
---

<h3 class="mdc-typography--subtitle1">
    <time class="timeago" datetime="{{ page.date | date: '%Y-%m-%d' }}T{{ page.date | date: '%H:%M:%S' }}">{{ page.date | date: '%A %e %B %Y' }}</time>
     | by {{ page.authors }}
</h3>
<figure>
    <img src="/images/article_name--cover.jpg" style="width:100%;">
    <figcaption class="mdc-typography--caption-text">A brass statue of a child, in a garden</figcaption>
</figure>
Content
