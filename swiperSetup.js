function initializeSwiper() {
	new Swiper('.swiper', {
		// #Способ для горизонтального слайдера
		// direction: 'vertical',
		// mousewheel: {
		// 	forceToAxis: true, // Принудительно привязывает прокрутку к оси слайдера
		// 	releaseOnEdges: true, // Позволяет прокрутке страницы, когда достигнут край слайдера
		// 	sensitivity: 1, // Регулирует чувствительность прокрутки
		// },

		// #Способ для вертикального слайдера
		direction: 'horizontal', // Устанавливаем горизонтальный режим
		mousewheel: {
			forceToAxis: false, // Принудительно привязываем прокрутку к горизонтальной оси
			releaseOnEdges: true, // Позволяет прокрутке страницы, когда достигнут край слайдера
			sensitivity: 1, // Регулировка чувствительности
		},
		on: {
			slideChangeTransitionEnd: function () {
				if (this.isEnd) {
					document.body.style.overflow = 'auto'; // Включаем скролл для body
					document
						.getElementById('last-slide-anchor')
						.scrollIntoView({ behavior: 'smooth' }); // Плавно переходим к якорю последнего слайда
				} else {
					// Если не на последнем слайде
					document.body.style.overflow = 'hidden'; // Отключаем скролл страницы
					document
						.getElementById('swiper')
						.scrollIntoView({ behavior: 'smooth' }); // Плавно переходим к якорю другого слайда
				}
			},
		},

		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
export { initializeSwiper };
