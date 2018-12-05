import React from 'react';

import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';
import { DaftarStafFarmasiRow } from '../components/DaftarStafFarmasiRow';

export class DaftarStafFarmasi extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaf: []
		}
		Appointment.getAllStafFarmasi().then(response =>{
			this.setState({
				loading: false,
				listStaf: response.result
			})
		})
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Staf', 'Jenis Staf']}>
                    <DaftarStafFarmasiRow listStaf={this.state.listStaf}/>
                </TableContainer>
            )
        }
	}
}