---
title: BBC Young Reporter
description: News articles written by Reading School students in year 8
layout: none
---

<script src="/js/jquery.min.js"></script>

<iframe id="articles" src="/"></iframe>
<a class="twitter-timeline" id="tweets" data-dnt="true" href="https://twitter.com/BBCYoungReport?ref_src=twsrc%5Etfw">Tweets by BBCYoungReport</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<script>
    window.setInterval(function() {
        document.getElementById('iframe').contentWindow.location.reload();
        document.getElementsByClass('twitter-timeline')[0].contentWindow.location.reload();
    }, 60000);
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
    #articles {
        width: 70%;
        float: left;
    }
    .twitter-timeline {
        width: 30% !important;
        float: right;
    }
</style>
