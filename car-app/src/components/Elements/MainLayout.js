import styled from 'styled-components';
import triangle from '../../image/triangle.svg';
export const MainLayout = styled.section`
	.header__content {
		background-color: #f8f8f8;
		width: 100%;
		height: 90vh;
		position: relative;
	}

	.triangle {
		display: block;
		background-image: url(${triangle});
		background-size: cover;
		width: 800px;
		height: 800px;
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.header__content-car {
		position: absolute;
		top: 43%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 48rem;
	}

	.ellipse-container {
		width: 608px;
		height: 608px;
		position: absolute;
		top: 43%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		margin: 0 auto;
		/* z-index: -1; */
	}

	.ellipse {
		position: absolute;
		top: 0;
		border-radius: 50%;
		border-style: solid;
	}

	.ellipse.thin {
		width: 100%;
		height: 100%;
		border-width: 3px;
		border-color: black;
		opacity: 0.5;
	}

	.ellipse.thick {
		width: 93%;
		height: 93%;
		border-width: 10px;
		border-color: #fff;
		transform: rotate(-45deg);
		top: 22px;
		left: 25px;
	}

	.ellipse.yellow {
		width: 93%;
		height: 93%;
		border-width: 10px;
		border-color: var(--main-color) transparent;
		transform: rotate(-45deg);
		top: 22px;
		left: 25px;
		animation: ellipseRotate 15s ease-in-out infinite;
		animation-timing-function: linear;
	}

	@keyframes ellipseRotate {
		0% {
			transform: rotate(-45deg);
		}
		100% {
			transform: rotate(-405deg);
		}
	}

	.header__photo-describtion {
		position: absolute;
		top: 4%;
		left: 60%;
		width: 400px;
		font-size: 6rem;
		opacity: 0.8;
	}

	.header__content-rectangle {
		position: absolute;
		top: 200px;
		background-color: var(--main-color);
		width: 25rem;
		padding: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header__content-rectangle h3 {
		color: #fff;
		font-size: 2rem;
	}

	.header__content-small-triangle {
		width: 30px;
		height: 30px;
	}

	.header__content-services {
		position: absolute;
		bottom: 200px;
		left: 20px;
	}
	.header__content-services h1 {
		font-size: 11rem;
		font-weight: bold;
		transform: rotate(-90deg);
		position: relative;
	}
	.header__content-services h1::after {
		content: 'on Sale';
		font-size: 9rem;
		color: var(--main-color);
		position: absolute;
		top: 60%;
		left: 60%;
		width: 100%;
		transform: translateX(-50%);
		opacity: 0.8;
	}
	.header__content-services figcaption {
		transform: rotate(-90deg);
		position: absolute;
		top: 50%;
		left: 80%;
		font-size: 2.6rem;
		width: 50%;
	}
	.social-media {
		position: absolute;
		bottom: 50px;
		right: 100px;
	}
	.social-media i {
		font-size: 3rem;
		padding: 30px;
		pointer-events: visible;
	}
	.fa-facebook-square {
		color: #4267b2;
	}
	.fa-github {
		color: #24292e;
	}
	.fa-linkedin {
		color: #0073b0;
	}

	.scroll-down-link {
		position: absolute;
		bottom: -20px;
		left: 50%;
		z-index: 2;
		display: inline-block;
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		text-decoration: none;
		padding-top: 60px;
		color: #fff;
		-webkit-transition: opacity 0.5s;
		-o-transition: opacity 0.5s;
		transition: all 0.5s;
	}

	.scroll-down-link:hover {
		opacity: 0.3;
	}

	.scroll-down-link span {
		position: absolute;
		top: 0;
		left: 50%;
		width: 46px;
		height: 46px;
		margin-left: -23px;
		border: 1px solid black;
		border-radius: 100%;
		box-sizing: border-box;
		color: black;
	}

	.scroll-down-link span::after {
		position: absolute;
		top: 50%;
		left: 50%;
		content: '';
		width: 13px;
		height: 13px;
		margin: -12px 0 0 -6px;
		border-left: 1px solid black;
		border-bottom: 1px solid black;
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
		box-sizing: border-box;
		animation: scrollDown 2s ease-in-out infinite;
	}

	.scroll-down-link span::before {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		content: '';
		width: 44px;
		height: 44px;
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.6);
		border-radius: 100%;
		opacity: 0;
		-webkit-animation: sdb 2s infinite;
		animation: sdb 2s infinite;
		box-sizing: border-box;
	}

	@-webkit-keyframes sdb {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 0.5;
		}
		60% {
			box-shadow: 0 0 0 30px rgba(31, 23, 23, 0.6);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes sdb {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 0.5;
		}
		60% {
			box-shadow: 0 0 0 30px rgba(31, 23, 23, 0.6);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes scrollDown {
		0% {
			transform: translateY(-10px) rotate(-45deg);
			opacity: 0;
		}

		100% {
			transform: translateY(15px) rotate(-45deg);
			opacity: 1;
		}
	}

	.car__container {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
		justify-items: center;
		align-items: center;
		grid-gap: 20px;
		margin-top: 2rem;
	}

	/* FILTER CONTAINER */

	.filter__container {
		background-color: rgb(204, 195, 147);
		width: 100%;
		padding: 30px;
		color: rgb(54, 54, 54);
	}
	.filter__container-title {
		font-size: 2.9rem;
		width: 88%;
		margin: 0 auto;
		padding-bottom: 30px;
	}
	.filter__elements {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 1rem auto;
	}

	.filter__methods-title {
		font-size: 1.7rem;
		margin-bottom: 2rem;
		margin-left: 3rem;
	}
	.filter__buttons button {
		margin-left: 2rem;
		padding: 16px 35px;
		border-radius: 40px;
		border: none;
		font-size: 1.5rem;
		outline: none;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}
	.filter__buttons button:hover {
		opacity: 0.6;
	}

	.more-elements {
		width: 100%;
		text-align: center;
	}
	.more-cars {
		padding: 14px 44px;
		background-color: var(--main-color);
		border: none;
		font-size: 2rem;
		margin: 5rem auto;
		cursor: pointer;
		outline: none;
		color: #fff;
		font-weight: bold;
		border-radius: 20px;
	}
	.more-cars:hover {
		opacity: 0.8;
	}

	.pointer {
		display: inline-flex;
		justify-content: center;
		width: 150px;
		height: 70px;
		clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
		background-color: rgb(235, 192, 192);
		text-align: center;
		line-height: 70px;
		color: #fff;
		font-size: 1.5rem;
		cursor: pointer;
		transition: all 0.3s ease-in;
	}
	.pointer:hover {
		opacity: 0.5;
	}
	.firstPointer {
		clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
		border-radius: 10px;
	}
	.lastPointer {
		clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%);
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.pointer--one {
		background-color: rgb(231, 173, 126);
	}
	.pointer--two {
		background-color: rgb(184, 110, 49);
	}
	.pointer--three {
		background-color: rgb(180, 129, 87);
	}
	.pointer--four {
		background-color: rgb(151, 123, 100);
	}
	@media screen and (max-width: 1550px) {
		.filter__elements {
			flex-direction: column;
		}
		.filter__methods {
			display: flex;
			align-items: center;
			padding: 2rem 0.5rem;
		}
		.filter__methods-title {
			margin-bottom: 0;
			margin-right: 4rem;
		}
	}

	@media screen and (max-width: 1400px) {
		.triangle {
			height: 550px;
			width: 550px;
		}

		.header__photo-describtion {
			top: 15%;
			right: 30%;
			font-size: 4rem;
		}

		.header__content-services h1 {
			font-size: 7rem;
		}
		.header__content-services h1::after {
			font-size: 7rem;
		}
		.header__content-services figcaption {
			font-size: 2rem;
		}
		.ellipse.thick {
			top: 22px;
			left: 17px !important;
		}

		.ellipse.yellow {
			top: 22px;
			left: 17px !important;
		}
	}
	@media screen and (max-width: 1400px) {
		.header__content-car {
			width: 38rem;
		}

		.ellipse-container {
			width: 508px;
			height: 508px;
		}
	}
	@media screen and (max-width: 1050px) {
		.triangle {
			display: none;
		}

		.ellipse-container {
			width: 358px;
			height: 358px;
		}
		.ellipse.yellow {
			width: 87%;
			height: 87%;
		}
		.ellipse.thick {
			width: 87%;
			height: 87%;
		}
		.header__content-car {
			width: 27rem;
		}

		.header__photo-describtion {
			left: 55%;
			top: 0;
			transform: translateX(-50%);
			font-size: 2.5rem;
			margin-top: 2rem;
		}

		.header__content-services {
			bottom: 160px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
		}
		.header__content-services {
			bottom: 20%;
		}
		.header__content-services h1 {
			font-size: 4rem;
			transform: rotate(0);
			display: flex;
			left: -80px;
		}
		.header__content-services h1::after {
			font-size: 3rem;
			transform: rotate(0);
			top: 0;
			left: 105%;
		}
		.header__content-services figcaption {
			font-size: 1.1rem;
			transform: rotate(0);
			top: 105%;
			left: 0%;
			width: 100%;
		}
		.header__content-rectangle {
			width: 15rem;
			padding: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.header__content-rectangle h3 {
			font-size: 1.7em;
		}
	}

	@media screen and (max-width: 850px) {
		.header__content-car {
			width: 230px;
		}
		.ellipse-container {
			width: 338px;
			height: 338px;
		}
		.ellipse.thick {
			width: 86%;
			height: 90%;
			top: 22px;
			left: 13px !important;
		}

		.ellipse.yellow {
			width: 86%;
			height: 90% !important;
			top: 22px;
			left: 13px !important;
		}
		.header__content-rectangle {
			display: none;
		}
		.header__photo-describtion {
			font-size: 2.2rem;
			margin-top: 5rem;
		}

		.header__content-services h1 {
			font-size: 5rem;
			font-weight: bold;
			transform: rotate(-90deg);
			position: relative;
		}
		.header__content-services h1::after {
			content: 'on Sale';
			font-size: 3rem;
			color: var(--main-color);
			position: absolute;
			top: 60%;
			left: 60%;
			width: 100%;
			transform: translateX(-50%);
			opacity: 0.8;
		}
		.header__content-services figcaption {
			transform: rotate(-90deg);
			position: absolute;
			top: 50%;
			left: 80%;
			font-size: 1.2rem;
			width: 50%;
		}
	}

	@media screen and (max-width: 550px) {
		.car__container {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		}
		.header__photo-describtion {
			margin-top: 7rem;
			font-size: 1.6rem;
			width: 70%;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media screen and (max-width: 400px) {
		.ellipse-container {
			width: 258px;
			height: 258px;
		}
		.ellipse.yellow {
			width: 90% !important;
			height: 85% !important;
		}
		.ellipse.thick {
			width: 90% !important;
			height: 85% !important;
		}
		.header__content-car {
			width: 18rem;
		}
	}
`;
