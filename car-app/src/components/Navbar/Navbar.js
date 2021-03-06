import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ProductsContext } from '../../context/context';
import { store } from 'react-notifications-component';
import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 20px 50px 0 50px;
	align-items: center;
	background-color: #f8f8f8;
	height: 10vh;

	.nav__links {
		display: flex;
		list-style-type: none;
	}
	.nav__links li {
		padding: 20px;
	}
	.nav__links a {
		text-decoration: none;
		font-weight: 600;
		color: black;
		font-size: 2rem;
	}
	.basket {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		position: relative;
	}
	.circle {
		position: absolute;
		bottom: -10px;
		right: -5px;
		background-color: #fff;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.circle span {
		font-size: 1.4rem;
		font-weight: 500;
	}
	.basket i {
		font-size: 2rem;
	}

	.login-btn {
		display: block;
		padding: 8px 20px;
		border: 1px solid black;
		font-size: 2rem;
		font-weight: bold;
		cursor: pointer;
		background-color: #fff;
	}
	.login-btn:hover {
		opacity: 1.2;
	}
	.nav__right {
		display: flex;
	}

	.user__menu {
		display: flex;
		justify-content: center;
		margin-right: 8rem;
	}
	.nav__userPhoto-icon {
		display: block;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 1px solid black;
		object-fit: cover;
		margin-right: 2rem;
	}
	.activeLink {
		border-bottom: 2px solid var(--main-color);
	}

	.nav__hamburger {
		position: absolute;
		top: 4rem;
		right: 4rem;
		flex-direction: column;
		width: 30px;
		height: 21px;
		justify-content: space-between;
		display: none;
		border: none;
		outline: none;
	}
	.nav__bar {
		height: 3px;
		width: 100%;
		background-color: black;
		border-radius: 10px;
	}

	@media screen and (max-width: 800px) {
		.nav__hamburger {
			display: flex;
			z-index: 100;
			width: 30px;
			height: 21px;
		}
		.nav__link,
		.nav__right {
			display: none;
			text-align: center;
			margin: 0.5rem auto;
			margin-bottom: 1rem;
		}
		.nav {
			flex-direction: column;
			align-items: flex-start;
			height: auto;
		}
		.nav__links {
			width: 100%;
			flex-direction: column;
		}
		.nav__link.active {
			display: flex;
		}
		.nav__right.active {
			display: flex;
		}
	}
`;

export default function Navbar(props) {
	const [valueState, setValueState] = useContext(ProductsContext);

	const [active, setActive] = useState(false);

	const history = useHistory();

	function logOut() {
		store.addNotification({
			title: 'You are logged out',
			message: 'welcome again :)',
			type: 'info',
			insert: 'bottom',

			container: 'bottom-right',
			animationIn: ['animated', 'fadeIn'],
			animationOut: ['animated', 'fadeOut'],
			dismiss: {
				duration: 3000,
				onScreen: true,
				showIcon: true,
				pauseOnHover: true
			}
		});

		localStorage.removeItem('username');
		history.replace('/');
		localStorage.removeItem('photoUser');
	}
	const path = history.location.pathname;

	return (
		<Nav>
			<button className="nav__hamburger" onClick={() => setActive(!active)}>
				<span className="nav__bar"></span>
				<span className="nav__bar"></span>
				<span className="nav__bar"></span>
			</button>
			<ul className="nav__links">
				<li className={active ? 'nav__link active' : 'nav__link'}>
					<Link to="/" className={path === '/' ? 'activeLink' : ''}>
						Home
					</Link>
				</li>
				<li className={active ? 'nav__link active' : 'nav__link'}>
					<Link to="/products" className={path === '/products' ? 'activeLink' : ''}>
						Products
					</Link>
				</li>
				<li className={active ? 'nav__link active' : 'nav__link'}>
					<Link to="/contacts" className={path === '/contacts' ? 'activeLink' : ''}>
						Contact
					</Link>
				</li>
			</ul>
			<div className={active ? 'nav__right active' : 'nav__right'}>
				<div className="user__menu">
					{localStorage.getItem('username') ? (
						<Link className="nav__user-btn" to="/user">
							<img
								src={
									localStorage.getItem('photoUser')
										? localStorage.getItem('photoUser')
										: 'http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png'
								}
								alt="User logo"
								className="nav__userPhoto-icon"
								title="Account"
							/>
						</Link>
					) : null}

					{localStorage.getItem('username') ? (
						<button onClick={logOut} className="login-btn">
							Logout
						</button>
					) : (
						<Link to="/sign-in" className="login-btn">
							Login
						</Link>
					)}
				</div>

				<Link to="/basket">
					<div className="basket">
						<i className="fas fa-shopping-basket"></i>
						<div className="circle">
							<span>{valueState.length}</span>
						</div>
					</div>
				</Link>
			</div>
		</Nav>
	);
}
