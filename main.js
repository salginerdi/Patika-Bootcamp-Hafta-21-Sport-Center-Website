const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");

btn1.addEventListener("click", () => {
  document.querySelector("h3").innerHTML = "Why are your Yoga?";
  const paragraphDiv = document.querySelector(".paragraph-div");
  paragraphDiv.innerHTML =
    "<p><b>Yoga, for me, is about finding inner balance, flexibility, and peace. It helps reduce daily stress, enhances mental focus, and contributes to my overall well-being. Yoga strengthens the connection between my body and mind, improving my quality of life. Each session offers an opportunity for relaxation and personal growth. It's a source of physical strength and a gateway to mental awakening and tranquility.</b></p>";
  const headerDiv2 = document.querySelector(".header-div-2");
  headerDiv2.innerHTML = "<h3><b>When comes Yoga Your Time.</b></h3>";
  const paragraphDiv2 = document.querySelector(".paragraph-div-2");
  paragraphDiv2.innerHTML =
    "<b>Saturday - Sunday: 8:00 am - 10.00 am</b><br /><br /><b>Monday - Tuesday: 10:00 am - 12:00 pm </b><br /><br /><b>Wednesday - Friday: 3:00 pm - 6:00 pm</b>";
  let imageDiv = document.querySelector(".img-div");
  imageDiv.src = "/Documents/Images/yoga.jpg";
});

btn2.addEventListener("click", () => {
  document.querySelector("h3").innerHTML = "Why Participate in Group Work?";
  const paragraphDiv = document.querySelector(".paragraph-div");
  paragraphDiv.innerHTML =
    "<p><b>Teamwork in sports is crucial for success. It fosters collaboration, enhances communication, and promotes a sense of unity among athletes. Through collective efforts, diverse skills merge to achieve common goals, creating a supportive environment where individuals can learn from each other, ultimately leading to improved performance and shared victories.</b></p>";
  const headerDiv2 = document.querySelector(".header-div-2");
  headerDiv2.innerHTML = "<h3><b>When comes Group Teamwork Your Time.</b></h3>";
  const paragraphDiv2 = document.querySelector(".paragraph-div-2");
  paragraphDiv2.innerHTML =
    "<b>Saturday - Sunday: 10:00 am - 12.00 am</b><br /><br /><b>Monday - Tuesday: 12:00 am - 2:00 pm </b><br /><br /><b>Wednesday - Friday: 7:00 pm - 9:00 pm</b>";
  let imageDiv = document.querySelector(".img-div");
  imageDiv.src = "/Documents/Images/group.jpg";
});

btn3.addEventListener("click", () => {
  document.querySelector("h3").innerHTML = "Do You Want to Training Solo?";
  const paragraphDiv = document.querySelector(".paragraph-div");
  paragraphDiv.innerHTML =
    "<p><b>Solo sports in the gym provide individuals with a unique and empowering experience. Engaging in activities such as weightlifting, running, or cycling alone allows one to focus entirely on personal goals and progress. The solitude creates a distraction-free environment, enabling individuals to connect with their inner strength and determination.</b></p>";
  const headerDiv2 = document.querySelector(".header-div-2");
  headerDiv2.innerHTML = "<h3><b>When comes Solo Your Time.</b></h3>";
  const paragraphDiv2 = document.querySelector(".paragraph-div-2");
  paragraphDiv2.innerHTML =
    "<b>Saturday - Sunday: 6:00 am - 8.00 am</b><br /><br /><b>Monday - Tuesday: 11:00 am - 1:00 pm </b><br /><br /><b>Wednesday - Friday: 3:00 pm - 6:00 pm</b>";
  let imageDiv = document.querySelector(".img-div");
  imageDiv.src = "/Documents/Images/solo.jpg";
});

btn4.addEventListener("click", () => {
  document.querySelector("h3").innerHTML = "You Want to Do Stretching?";
  const paragraphDiv = document.querySelector(".paragraph-div");
  paragraphDiv.innerHTML =
    "<p><b>In our fast-paced lives, it's easy to neglect the importance of stretching in our daily routine. However, incorporating regular stretching exercises into your day can bring about numerous benefits for both your body and mind. Whether you're an athlete aiming for peak performance or someone with a sedentary lifestyle, flexibility is crucial for overall well-being.</b></p>";
  const headerDiv2 = document.querySelector(".header-div-2");
  headerDiv2.innerHTML = "<h3><b>When comes Stretching Your Time.</b></h3>";
  const paragraphDiv2 = document.querySelector(".paragraph-div-2");
  paragraphDiv2.innerHTML =
    "<b>Saturday - Sunday: 9:00 am - 11.00 am</b><br /><br /><b>Monday - Tuesday: 12:00 am - 2:00 pm </b><br /><br /><b>Wednesday - Friday: 4:00 pm - 7:00 pm</b>";
  let imageDiv = document.querySelector(".img-div");
  imageDiv.src = "/Documents/Images/stret.jpg";
});

document.addEventListener("DOMContentLoaded", function () {
  let heightInput = document.querySelector(".heightInput");
  let weightInput = document.querySelector(".weightInput");

  heightInput.addEventListener("input", calculateBMI);
  weightInput.addEventListener("input", calculateBMI);

  function calculateBMI() {
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    if (!isNaN(height) && !isNaN(weight)) {
      let bmi = weight / ((height / 100) * (height / 100));

      let bmiTriangle = document.querySelector(".bmi-triangle");

      document.documentElement.style.setProperty(
        "--bmi-triangle-left",
        getLeftPosition(bmi)
      );
    }
  }

  function getLeftPosition(bmi) {
    if (bmi < 18.5) {
      return "22%";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "37%";
    } else if (bmi >= 25 && bmi < 30) {
      return "52%";
    } else if (bmi >= 30 && bmi < 35) {
      return "67%";
    } else {
      return "82%";
    }
  }
});

$(document).ready(function () {
  let navbar = $(".navbar-sec");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      navbar.addClass("navbar-scrolled");
    } else {
      navbar.removeClass("navbar-scrolled");
    }
  });
});
