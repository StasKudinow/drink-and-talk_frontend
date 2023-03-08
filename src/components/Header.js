import React from "react";

function Header() {
	return (
		<header className="pt-10">
			<nav className="container w-widthHeader mx-auto">
				<div>
					<ul className="flex">
						<li className="text-[30px] ml-28">
							<a href="#">О сервисе</a>
						</li>
						<li className="text-[30px] ml-28">
							<a href="#">Контакты</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
