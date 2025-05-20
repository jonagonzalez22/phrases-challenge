import React, { useState } from 'react';
import './HomeHeader.css';
import { IconButton } from '../../../components/IconButton';
import { ModalAddPhrase } from '../ModalAddPhrase';

export type HomeHeaderProps = {
	// types...
};

const HomeHeader: React.FC<HomeHeaderProps> = ({}) => {
	const [openModal, setOpenModal] = useState(false);
	const handleOpenCloseModal = (): void => {
		setOpenModal(!openModal);
	};
	return (
		<>
			<ModalAddPhrase open={openModal} handleClose={handleOpenCloseModal} />
			<header className='home-header'>
				<h1 className='home-header-title'>Mis Frases</h1>
				<IconButton
					icon='add'
					variant='primary-outline'
					onClick={handleOpenCloseModal}
				/>
			</header>
		</>
	);
};

export default HomeHeader;
