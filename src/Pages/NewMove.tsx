import React from 'react';
import Footer from '../Components/Footer';
import FormulaireBuy from '../Components/FormulaireBuy';
import FormulaireMove from '../Components/FormulaireMove';
import FormulaireUse from '../Components/FormulaireUse';
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


            <FormulaireMove />
            <FormulaireBuy />
            <FormulaireUse />
            
            <Footer/>
        </>
    );
};

export default NewEvent;