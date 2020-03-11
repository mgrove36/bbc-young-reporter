---
title: BBC Young Reporter
description: News articles written by Reading School students in year 8
layout: home
---

{% if site.articles %}
{% assign currentdate_count = 0 %}
{% assign articles = site.articles | sort: date | reverse %}
{% for article in articles %}
{% assign currentdate = article.date | date: "%Y" %}
{% if currentdate != date %}
{% assign currentdate_count = 0 %}
{% if article.url != articles.first.url %}
    </div>
</div>
<div class="splitter"></div>
{% endif %}
<div class="article-section parallax-section" data-jarallax data-speed="{{ site.parallax-speed }}" style="background-image: url('/images/backgrounds/{{ currentdate }}.jpg');">
    <div class="article-section-header">
        <h1 class="mdc-typography--headline4">{{ currentdate }}</h1>
        <button class="mdc-button " data-mdc-auto-init="MDCRipple" onclick="window.location='/years/{{ currentdate }}';">See All <span class="material-icons">keyboard_arrow_right</span></button>
    </div>
    <div class="articles">
{% assign date = currentdate %}
{% endif %}
{% if currentdate_count < 3 %}
{% assign currentdate_count = currentdate_count | plus: 1 %}
    {% include mdc-card.html article=article %}
{% endif %}
{% if currentdate != date %}
{% endif %}
{% if article.url == articles.last.url %}
    </div>
</div>
{% endif %}
{% endfor %}
{% endif %}