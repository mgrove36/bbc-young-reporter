---
title: BBC Young Reporter
description: Articles from Reading School's year 8 students
---

<!-- Highlights -->
<section class="wrapper">
	<div class="inner">
		
		{% if site.articles %}
		{% assign currentdate_count = 0 %}
		{% assign articles = site.articles | sort: date | reverse %}
		{% for article in articles %}
		{% assign currentdate = article.date | date: "%Y" %}
		{% if currentdate != date %}
		{% assign currentdate_count = 0 %}
		{% if article.url != articles.first.url %}
		</div>
		{% endif %}
		
		<section class="cta wrapper" style="background-image: linear-gradient(135deg, rgba(var(--background-colour-dark-rgb), 0.5), rgba(var(--background-colour-dark-rgb), 0.9)), url(/images/backgrounds/{{currentdate}}.jpg)">
			<div class="inner">
				<h2>{{ currentdate }}</h2>
				<a href="/years/{{ currentdate }}" class="button">See all</a>
			</div>
		</section>

		<div class="highlights">
	
		{% assign date = currentdate %}
		{% endif %}
		{% if currentdate_count < 3 %}
		{% assign currentdate_count = currentdate_count | plus: 1 %}
			<section>
				<div class="content">
					<header>
						{% assign article_url = article.url | relative_url %}
						<a href="{{ article_url }}" class="image fit"><img src="/images{{ article_url | remove: '.html' | remove: '/articles' }}.jpg"></a>
						<h3>{{ article.title }}</h3>
					</header>
					<p><time class="timeago" datetime="{{ article.date | date: '%Y-%m-%d' }}T{{ article.date | date: '%H:%M:%S' }}">{{ article.date | date: '%d/%m/%Y' }}</time>
					&bull; by {{ article.authors }}</p>
					<p style="text-align: left;">{{ article.description }}</p>
					<a href="{{ article_url }}" class="button small">Read more</a>
				</div>
			</section>
		{% endif %}
		{% if article.url == articles.last.url %}
		</div>
		{% endif %}
		{% endfor %}
		{% endif %}

	</div>
</section>