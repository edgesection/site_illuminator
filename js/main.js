window.onload = function(){

	let windowInnerWidth = window.innerWidth;
	
	console.log("windowInnerWidth: ", windowInnerWidth);

	document.querySelector("header a#send").addEventListener("click", (e) => {
	
		document.querySelector("div.pop_up_box").style.display = "flex";
		document.querySelector("div.sky_black").style.display = "initial";
		document.querySelector("body").style.overflowY = "hidden";
	
	});
	
	document.querySelector("footer div.ui_box div.contacts__left>button#send").addEventListener("click", (e) => {
	
		document.querySelector("div.pop_up_box").style.display = "flex";
		document.querySelector("div.sky_black").style.display = "initial";
		document.querySelector("body").style.overflowY = "hidden";
	
	});
	
	document.querySelector("div.pop_up_box div.pop_up__window div.pop_up__close").addEventListener("click", (e) => {
	
		document.querySelector("div.pop_up_box").style.display = "none";
		document.querySelector("div.sky_black").style.display = "none";
		document.querySelector("body").style.overflowY = "scroll";
	
	});
	
	document.querySelector("header div.header__nav_box div.header__mobile_icon").addEventListener("click", (e) => {
	
		document.querySelector("div.mobile_menu").style.visibility = "visible";
		document.querySelector("div.mobile_menu").style.left = "0px" ;
		document.querySelector("body").style.overflowY = "hidden";
	
	});
	
	document.querySelector("div.mobile_menu div.mobile_menu__header_section img").addEventListener("click", (e) => {
	
		document.querySelector("div.mobile_menu").style.visibility = "hidden";
		document.querySelector("div.mobile_menu").style.left = "100vw" ;
		document.querySelector("body").style.overflowY = "scroll";
	
	});
	
	document.querySelector("div.mobile_menu div.mobile_menu__list").addEventListener("click", (e) => {
	
		document.querySelector("div.mobile_menu").style.visibility = "hidden";
		document.querySelector("div.mobile_menu").style.left = "100vw" ;
		document.querySelector("body").style.overflowY = "scroll";
	
	});
	
	//----------------
	
	const animatedElements = document.querySelectorAll('.scroll-item');
	  const animationDelay = 200; // 0.2 секунды
	  let lastAnimationTime = 0;
	  let animationQueue = [];
	  let scrollDirection = 'down';
	  let lastScrollPosition = window.scrollY;

	  // Определяем направление скролла
	  window.addEventListener('scroll', function() {
		scrollDirection = window.scrollY > lastScrollPosition ? 'down' : 'up';
		lastScrollPosition = window.scrollY;
	  });

	  const observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
		  if (entry.isIntersecting) {
			const elementIndex = Array.from(animatedElements).indexOf(entry.target);
			if (elementIndex !== -1 && !animationQueue.includes(elementIndex)) {
			  animationQueue.push(elementIndex);
			  processAnimationQueue();
			}
		  }
		});
	  }, {
		threshold: 0.1,
		rootMargin: '50px 0px'
	  });

	  function checkVisibleElements() {
		animatedElements.forEach(function(element, index) {
		  const rect = element.getBoundingClientRect();
		  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
		  
		  if (isVisible && !element.classList.contains('active')) {
			if (!animationQueue.includes(index)) {
			  animationQueue.push(index);
			}
		  }
		});
		processAnimationQueue();
	  }

	  function processAnimationQueue() {
		animationQueue.sort((a, b) => scrollDirection === 'down' ? a - b : b - a);
		
		if (animationQueue.length > 0) {
		  const currentIndex = animationQueue[0];
		  const currentElement = animatedElements[currentIndex];
		  
		  if (!currentElement.classList.contains('active')) {
			const now = performance.now();
			const delay = Math.max(0, lastAnimationTime - now + animationDelay);
			
			setTimeout(function() {
			  currentElement.classList.add('active');
			  lastAnimationTime = performance.now();
			  animationQueue.shift();
			  processAnimationQueue();
			}, delay);
		  } else {
			animationQueue.shift();
			processAnimationQueue();
		  }
		}
	  }

	  animatedElements.forEach(function(element) {
		observer.observe(element);
	  });

	  checkVisibleElements();
	  
	  //---------------
	
	
	let listServices = {
		"development_of_design_and_patterns": "src/image/overlock.png",
		"sewing_samples": "src/image/clothes.jpg",
		"branding_printing_of_tags_with_your_logo_individual_packaging": "src/image/birki.jpg",
		"application_of_embroidery_printing_appliques": "src/image/vishivka.jpg",
		"delivery_by_any_transport_company_throughout_Russia_and_beyond": "src/image/dostavka.jpg"
	};
	
	let buttons = document.querySelectorAll("main section.services div.services__list_services div.services__box_compete div.services__box_left div.services__services_name p");
	
	buttons.forEach(button => {
	  button.addEventListener('mouseenter', (e) => {
	  
		let getNeedIdName = e.target.getAttribute("name");
		
		document.querySelector("main section.services div.services__list_services div.services__box_compete div.services__box_left div.services__services_name p#active").setAttribute("id", "");
		e.target.setAttribute("id", "active");
		
		document.querySelector("main section.services div.services__list_services div.services__box_compete div.services__box_right img").setAttribute("src", listServices[getNeedIdName]);
		
	  });
	});
	
	//IMAGES SLIDER
	
	let img_slider = document.querySelectorAll("div.cans__images div.swiper-wrapper img");
	
	let startSliderImages = () => {
		
		img_slider[0].classList.add("swiper-slide-active");
		
		if(img_slider.length <= 1){
			document.querySelector("main section.cans div.ui_element div.cans__module_gallery div.controls > div.left").style.display = "none";
			document.querySelector("main section.cans div.ui_element div.cans__module_gallery div.controls > div.right").style.display = "none";
			document.querySelector("main section.cans div.ui_element div.cans__module_gallery div.controls").style.justifyContent = "center";
		}

		document.querySelector("main section.cans div.ui_element div.cans__module_gallery div.controls div.cans__image_name").innerText = img_slider[0].getAttribute("alt");
		
		if(img_slider.length > 1){
			if (document.querySelector('.cans__images')) {
				swiper = new Swiper('.cans__images', {
				  speed: 1000,
				  // Optional parameters
				  loop: true,

				  // Navigation arrows
				  navigation: {
					nextEl: 'main section.cans div.ui_element div.cans__module_gallery div.controls > div.right',
					prevEl: 'main section.cans div.ui_element div.cans__module_gallery div.controls > div.left',
				  }
				});
			}else{
				console.error('Swiper element not found!');
			}
		}
		
	};
	
	startSliderImages();

	
	let position_slider = 0;
	let block_slider = 0;
	
	document.querySelector("main section.cans div.ui_element div.cans__module_gallery div.controls > div.right").addEventListener("click", () => {
		
		if(block_slider == 0){
			
			block_slider = 1;
			
			position_slider++;
			
			if(position_slider >= img_slider.length){
				position_slider = 0;
			}
			
			document.querySelector("div.cans__image_name").innerText = img_slider[position_slider].getAttribute("alt");
			
			setTimeout(function(){
				block_slider = 0;
			}, 1000);
			
		}
		
	});
	
	document.querySelector("main section.cans div.ui_element div.cans__module_gallery div.controls > div.left").addEventListener("click", () => {
		
		if(block_slider == 0){
			
			block_slider = 1;
		
			position_slider--;
			
			if(position_slider < 0){
				position_slider = img_slider.length - 1;
			}
			
			document.querySelector("div.cans__image_name").innerText = img_slider[position_slider].getAttribute("alt");
			
			setTimeout(function(){
				block_slider = 0;
			}, 1000);
		
		}
		
	});
	
	//-------------
	//-------------
	//REVIEWS SLIDER
	
	let reviews_slider = document.querySelectorAll("main section.reviews div.ui_element div.reviews__list div div.reviews__review");
	
	let startSliderReviews = () => {
		
		//img_slider[0].classList.add("swiper-slide-active");
		
		/*let spaceBetweenOfWidth = 20;
		let slidesPerViewOfWidth = 2;
		
		if(windowInnerWidth <= 900){
			slidesPerViewOfWidth = 1;
		}*/
		
		if(reviews_slider.length == 2 && windowInnerWidth > 900){
			document.querySelector("main section.reviews div.ui_element div.controls > div.left").style.display = "none";
			document.querySelector("main section.reviews div.ui_element div.controls > div.right").style.display = "none";
		}
		
		if(reviews_slider.length <= 1){
			document.querySelector("main section.reviews div.ui_element div.controls > div.left").style.display = "none";
			document.querySelector("main section.reviews div.ui_element div.controls > div.right").style.display = "none";
			
			/*reviews_slider[0].style.width = "100%";
			spaceBetweenOfWidth = 0;
			slidesPerViewOfWidth = 1;*/
		}
		
		
		if (document.querySelector('main section.reviews div.ui_element div.reviews__list')) {
			
			swiper = new Swiper('main section.reviews div.ui_element div.reviews__list', {
			  speed: 1000,
			  // Optional parameters
			  loop: true,

			  // Navigation arrows
			  navigation: {
				nextEl: 'main section.reviews div.ui_element div.controls > div.right',
				prevEl: 'main section.reviews div.ui_element div.controls > div.left'
			  },
			  
			  slidesPerView: 'auto',
			  resizeObserver: false, // Отключаем отслеживание изменений
			  width: null, // Явное отключение ширины
			  
			  slidesPerView: 1,
			  spaceBetween: 0, // Аналог gap
			  
			  breakpoints: {
				  
				  992: {
					  slidesPerView: 2,
					  spaceBetween: 20
				  }
				  
			  }
			  
			});
		
		}else{
			console.error('Swiper element not found!');
		}
		
		
	};
	
	startSliderReviews();
	
	//FUNCTION CARD
	
	let top_card = document.querySelectorAll("main section.top div.ui_element div.top__list > div");
	let top_card_min_height = 200;
	
	top_card.forEach((element) => {
		
		if(element.classList[0] == "top_six"){
			return;
		}
		
		let h3 = element.querySelector("div.top__desc h3").scrollHeight;
		let p = element.querySelector("div.top__desc p").scrollHeight;
		
		let height_added = 0;
		if(windowInnerWidth >= 1400){
			height_added = 50;
		}
		
		let realHeightBlock = h3+p+60+26+60+10+(10)+height_added;
		
		if(realHeightBlock > top_card_min_height) top_card_min_height = realHeightBlock;
		if(element.scrollHeight > top_card_min_height) top_card_min_height = element.scrollHeight;
		console.log("height ", element," : ", realHeightBlock);
		
		element.addEventListener("mouseover", (e) => {

			if(element.querySelector("div.top__desc p")){

				element.style.aspectRatio = "auto";
				element.querySelector("div.top__desc p").style.maxHeight = element.querySelector("div.top__desc p").scrollHeight+"px";
				element.querySelector("div.top__desc p").style.padding = "15px 0px 0px 0px";
				
			}
			
		});
		
		element.addEventListener("mouseout", () => {
			
			if(element.querySelector("div.top__desc p")){
				element.style.aspectRatio = "16/10";
				element.querySelector("div.top__desc p").style.maxHeight = "0px";
				element.querySelector("div.top__desc p").style.padding = "0px";
			}
			
		});
		
	});
	
	top_card.forEach((element) => {
		
		element.style.minHeight = top_card_min_height+"px";
		
	});
	
	if(windowInnerWidth <= 760){
		
		document.querySelector("main div.main_box>img").setAttribute("src", "src/image/background_photoorvideo.jpg");
		
	}

};
