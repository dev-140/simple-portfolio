$(document).ready(function () {
	$(".multiple-items").slick({
		infinite: false,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		autoplay: true,
		slidesToScroll: 1,
	});

	emailjs.init("UYS2azYm6sggcXD6l");

	$("#sendEmailButton").click(function () {
		var fName = $("#fisrtName").val();
		var lName = $("#lastName").val();
		var email = $("#email").val();
		var message = $("#message").val();

		if (fName == "" && lName == "" && email == "" && message == "") {
			console.log("none");

			$(".email-modal-err").removeClass("d-none");
			setTimeout(function () {
				$(".email-modal-err").addClass("d-none");
			}, 2000);
		} else {
			// Prepare the email parameters
			var emailParams = {
				to_email: "roxmarzan14@gmail.com",
				from_name: fName + " " + lName,
				from_email: email,
				message: message,
			};

			// Send the email using EmailJS
			emailjs
				.send("service_eun9l0d", "template_lsal6hf", emailParams)
				.then(function (response) {
					console.log("Email sent successfully:", response);

					$(".email-modal").removeClass("none");

					setTimeout(function () {
						$(".email-modal").addClass("none");
					}, 5000);

					$("#fisrtName").val("");
					$("#lastName").val("");
					$("#email").val("");
					$("#message").val("");
				})
				.catch(function (error) {
					console.error("Email sending failed:", error);
				});
		}
	});

	$(".menu-btn, .close-menu-btn, .nav-link").on("click", () => {
		$(".nav-container").toggleClass("active");
	});
});
