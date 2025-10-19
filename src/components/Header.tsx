export default function Header() {
	return (
		<header className='Header flex flex-col justify-between items-center border-b border-black p-4 sm:flex-row'>
			<h1 className='text-2xl'>
				<a href='/' rel='home' title='Kyle Michael Sullivan'>
					Kyle Michael Sullivan
				</a>
			</h1>
			<p className='text-center'>Full-Stack&nbsp;Developer&nbsp;| Educator&nbsp;|&nbsp;Lawyer</p>
		</header>
	);
}
