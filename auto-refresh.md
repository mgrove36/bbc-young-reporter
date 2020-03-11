---
title: BBC Young Reporter
description: News articles written by Reading School students in year 8
layout: none
---

{% assign largest = 0 %}
{% for page in site.pages %}
{% assign url = page.url | remove: ".html" | remove: "/years/" %}
{% capture testValue %}{{ url | json }}{% endcapture %}
{% if testValue contains '"' %}{% else %}
{% assign largest_number = largest | times: 1 %}
{% assign url_number = url | times: 1 %}
{% if url_number > largest_number %}
{% assign largest = url %}
{% endif %}
{% endif %}
{% endfor %}

<iframe id="articles-1" class="articles" src="/years/{{ largest }}"></iframe>
<iframe id="articles-2" class="articles" src="/years/{{ largest }}"></iframe>
<a class="twitter-timeline" data-dnt="true" href="https://twitter.com/BBCYoungReport?ref_src=twsrc%5Etfw">Tweets by BBCYoungReport</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<script>
    window.setInterval(function() {
        document.getElementById('articles-1').style.zIndex = "2";
        document.getElementById('articles-2').style.zIndex = "1";
        document.getElementById('articles-2').contentWindow.location.reload(true);
        setTimeout(function() {
            document.getElementById('articles-2').style.zIndex = "2";
            document.getElementById('articles-1').style.zIndex = "1";
            document.getElementById('articles-1').contentWindow.location.reload(true);
        }, 10000)
    }, 20000);
</script>

<style>
    html, body {
        width: 100%;
    }
    html, body, iframe {
        height: 100%;
        margin: 0;
        padding: 0;
        border: none;
    }
    .articles {
        width: 70%;
        position: absolute;
        top: 0;
        left: 0;
        background: white;
    }
    #articles-1 {
        z-index: 2;
    }
    #articles-2 {
        z-index: 1;
    }
    .twitter-timeline {
        width: 30% !important;
        float: right;
    }
</style>
