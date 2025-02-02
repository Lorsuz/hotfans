import React from 'react';
import Head from '../partials/Head';

type Props = {
	children: React.ReactNode;
	title?: string;
};

const PageLayout = ({ children, title }: Props): JSX.Element => (
	<>
		<Head title={title} />
		{children}
	</>
);

export default PageLayout;