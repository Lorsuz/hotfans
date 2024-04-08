import React from 'react';
import styled from 'styled-components';

import PageLayout from '../../layouts/PageLayout';
import { Link, useParams } from 'react-router-dom';

const CarnivalDecade = () => {
	const [state, setState] = React.useState<boolean>(false);
	const { id } = useParams() as { id: string };
	const years = [];

	const decadeNumber = parseInt(id);
	const yearCurrent = new Date().getFullYear();
	const toggleState = () => {
		setState(!state);
	};
	
		
	} else {
		return (
			<PageLayout title='Template'>
				<StyledComponent $state={state}>
					<article className='wrapper'>
						<section className='all-carnivals'>
							<h1>Decada inválida</h1>
						</section>
					</article>
				</StyledComponent>
			</PageLayout>
		);
	}

	return (
		<PageLayout title='Template'>
			<StyledComponent $state={state}>
				<article className='wrapper'>
					<section className='all-carnivals'>
						{years.map((year, index) => (
							<Link to={AppRoutes.carnival + year} key={index} className='carnival-card'>
								<img src={BackgroundForOverlay} alt={`Carnaval ${id}`} />
								<h2>{year}</h2>
								<h3>Titulo do Carnaval</h3>
							</Link>
						))}
					</section>
				</article>
			</StyledComponent>
		</PageLayout>
	);
};

const StyledComponent = styled.section<{ $state: boolean }>`
	
`;

export default CarnivalDecade;