function campaignMonitor () {
  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.async = true;
  e.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://btn.createsend1.com/js/sb.min.js?v=2';
  e.className = 'createsend-script';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(e, s);
};

campaignMonitor();