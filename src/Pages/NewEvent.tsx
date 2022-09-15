import React from 'react';
import Footer from '../Components/Footer';
import FormulaireBuy from '../Components/FormulaireBuy';
import NavbarHeader from '../Components/NavbarHeader';
import { TableMaterial } from '../Components/TableMaterial';
import { Tableshop } from '../Components/Tableshop';
import { Tablestore } from '../Components/TableStore';
import { ProjectUrl } from '../constants';

const NewEvent = () => {
    return (
        <>

            {NavbarHeader(
                [
                    {name:"Listes",href: (ProjectUrl + "/")},
                    {name:"Movement des Materiaux",href: (ProjectUrl + "/move")}
                ],
                {name:"Offre d’emploi2",href: (ProjectUrl + "/")}
            )}


            <Tableshop colloneName={["Nom", "emplacement", "description"]} title={'Liste acquisition'} delet={false} modif={true} />
            <TableMaterial colloneName={["Nom", "Unité", "description"]} title={'Liste Maeriau'} delet={false} modif={true} />
            <Tablestore colloneName={["Nom", "emplacement", "est t'il plein", "volome actiel", "Poids actuel"]} title={'Liste stokage'} delet={false} modif={true} />
            <Footer/>
        </>
    );
};

export default NewEvent;