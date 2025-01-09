import { useState } from 'react';
import './style/style.css';
import Divider from './components/Divider';
import Skill1 from './components/Skill1';
import Skill2 from './components/Skill2';
import Skill3 from './components/Skill3';
import ContactCard from './components/ContactCard';

function App() {
	return (
		<div className="main">
			<section className="landing center-v">
				<div className="content center-v">
					<p className="medium">Hey there,</p>
					<h1>I'm Jay Rome!</h1>

					<div className="inline center">
						<h1>A</h1>
						<h1 className="highlight">developer</h1>
						<h1>who builds creative and user-friendly applications.</h1>
					</div>
				</div>

				<img src="/assets/images/landing/Grid.png" />
			</section>

			<section className="about">
				<p className="section-label">About</p>

				<div className="content">
					<div className="illustration">
						<img src="/assets/illustrations/person.png" />
						<div className="card"></div>
					</div>

					<div className="message">
						<h6>Nice to meet you!</h6>
						<p>
							I’m a 4th year IT college student based in Las Piñas City with a
							passion for technology and creativity. I find joy in continuous
							learning, challenging myself to achieve more.
						</p>
					</div>
				</div>
			</section>

			<Divider />

			<section className="skills">
				<p className="section-label">Skills</p>

				<div className="content center-v">
					<div className="technical">
						<h5 className="technical-header">My expertise lie within:</h5>

						<div className="container">
							<Skill1 />
							<Skill2 />
							<Skill3 />
						</div>
					</div>

					<div className="misc">
						<h5>
							Besides app development, I also do graphic designing and 3D art. I
							also play different instruments like piano, drums, and violin.
						</h5>

						<p>
							I’m the kind of person who loves to explore and discover different
							things. I prefer to be a jack of all trades rather than a master
							of one.
						</p>
					</div>
				</div>
			</section>

			<Divider />

			<section className="projects">
				<p className="section-label">Projects</p>
			</section>

			<Divider />

			<section className="contact">
				<p className="section-label">Contact</p>

				<div className="content">
					<div className="message">
						<h4>Let’s work together!</h4>
						<p>
							Feel free to reach out via email or connect with me on social
							media.
						</p>

						<img src="/assets/illustrations/dashed-arrow.png" />
					</div>

					<div className="stack">
						<ContactCard handle="@_moochhh_" label="instagram" />
						<ContactCard handle="/jay-rome-rana" label="linkedin" />

						<ContactCard handle="rana.jay.rome@gmail.com" label="email" />
					</div>
				</div>
			</section>

			<footer>
				<span></span>

				<div className="content">
					<h1>Jay Rome.</h1>

					<div className="container">
						<div className="sitemap">
							<p className="label">Sitemap</p>

							<button>About</button>
							<button>Skills</button>
							<button>Projects</button>
							<button>Contact</button>
						</div>

						<div className="contact">
							<p className="label">Contact</p>

							<button>Email</button>
							<button>Phone Number</button>
						</div>

						<div className="socials">
							<p className="label">Socials</p>
							<button>LinkedIn</button>
							<button>Instagram</button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
