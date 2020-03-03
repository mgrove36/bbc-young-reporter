---
title: BBC Young Reporter
description: News articles written by Reading School students in year 8
layout: home
---

{% if site.categories.articles %}
{% assign currentdate_count = 0 %}
{% assign articles = site.categories.articles | sort: date | reverse %}
{% for article in articles %}
{% assign currentdate = article.date | date: "%Y" %}
{% if currentdate != date %}
{% assign currentdate_count = 0 %}
{% if article.url != articles.first.url %}
    </div>
</div>
<div class="splitter"></div>
{% endif %}
<div class="article-section parallax-section" data-jarallax data-speed="0.4" style="background-image: url('/images/backgrounds/{{ currentdate }}.jpg');">
    <div class="article-section-header">
        <h1 class="mdc-typography--headline4">{{ currentdate }}</h1>
        <button class="mdc-button " data-mdc-auto-init="MDCRipple" onclick="window.location='/{{ currentdate }}';">See All <span class="material-icons">keyboard_arrow_right</span></button>
    </div>
    <div class="articles">
{% assign date = currentdate %}
{% endif %}
{% if currentdate_count < 3 %}
{% assign currentdate_count = currentdate_count | plus: 1 %}
<div class="mdc-card" onclick="window.location='{{ article.url | relative_url }}';">
    <div class="mdc-card__media mdc-card__media--16-9" style="background-image: url('/images/{{ article.url | relative_url | remove: '.html' | replace: '/', '-' | remove: '-articles-' }}.jpg');"></div>
    <div class="mdc-card-content">
        <h2 class="mdc-typography--headline6">{{ article.title }}</h2>
        <h3 class="mdc-typography--subtitle2">
            <time class="timeago" datetime="{{ article.date | date: '%Y-%m-%d' }}T{{ article.date | date: '%H:%M:%S' }}">{{ article.date | date: '%A %e %B %Y' }}</time>
            | by {{ article.authors }}
        </h3>
        <div class="mdc-typography--body2 article-description">{{ article.description }}</div>
    </div>
    <div class="mdc-card__actions">
        <div class="mdc-card__action-buttons">
            <button class="mdc-button mdc-card__action mdc-card__action--button" data-mdc-auto-init="MDCRipple" onclick="window.location='{{ article.url | relative_url }}';">Read</button>
        </div>
    </div>
</div>
{% endif %}
{% if currentdate != date %}
{% endif %}
{% if article.url == articles.last.url %}
    </div>
</div>
{% endif %}
{% endfor %}
{% endif %}