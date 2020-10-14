import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="site-header">
				<div className="container">
					<a href="/" className="site-logo" title="">Synet Technologies</a>
					<span className="nav-toggle">
						<span></span>
					</span>
					<div className="login-form">
						<span className="login-icon">Login</span>
						<form>
							<div className="form-elements">
								<p>
                                    <input type="text" id="" name="" placeholder="Name" />
                                </p>
								<p>
                                    <input type="email" id="" name="" placeholder="Email" />
                                </p>
							</div>
							<div className="form-button">
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</header>
        );
    }
}

export default Header;