$(".notice-btn").click(function () {
  $(".notice-btn").attr("class", "notice-btn active");
  $(".tab.notice").attr("class", "tab notice active");
  $(".gallary-btn").attr("class", "gallary-btn");
  $(".tab.gallary").attr("class", "tab gallary");
});
$(".gallary-btn").click(function () {
  $(".gallary-btn").attr("class", "gallary-btn active");
  $(".tab.gallary").attr("class", "tab gallary active");
  $(".notice-btn").attr("class", "notice-btn");
  $(".tab.notice").attr("class", "tab notice");
});


$(".tab.notice p").eq(0).click(
  function() {
    $(".popup").show();
  }
)
$(".close-btn").click(
  function() {
    $(".popup").hide();
  }
)