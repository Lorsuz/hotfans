import React, { useEffect } from 'react';

import Head from '../partials/Head';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

type Props = {
	children: React.ReactNode;
	title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title }: Props) => {
	return (
		<>
			<Head title={title} />
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;