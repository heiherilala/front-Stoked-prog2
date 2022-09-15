import { useEffect, useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import "./style.css";

function HorizontalPagination(
    dataLength:number,
    valuNumbur:number,
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>,
    tri:string|null
    ) {
        const maxpage=Math.round((dataLength/valuNumbur)%1>=0?(dataLength/valuNumbur)-(dataLength/valuNumbur)%1+1:(dataLength/valuNumbur)-(dataLength/valuNumbur)%1)
        const [inferiorNumpubPage,setInferiorNumberPage]=useState(0);
        const [superiorNumpubPage,setSuperiorNumberPage]=useState(0);
    useEffect(()=>{
        setInferiorNumberPage(Math.max((page-page%10)-10,1));
        setSuperiorNumberPage(Math.min((page-page%10)+10,maxpage));
    },[page,valuNumbur])

  return (
        <>
                <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                        <ButtonGroup className="mr-2" aria-label="First group">
                                <Button onClick={()=>{setPage(1)}} className={"custom_color_page"}>
                                        <i className="bi bi-chevron-double-left"></i>
                                </Button>{' '}
                                <Button onClick={()=>{page==1?setPage(1):setPage(page-1)}} className={"custom_color_page"}>
                                        <i className="bi bi-chevron-left"></i>
                                </Button>{' '}
                                <Button onClick={()=>{setPage(inferiorNumpubPage)}} className={"custom_color_page"}>
                                {inferiorNumpubPage}
                                </Button>{' '}
                                <input type="number" name="pageActiv" id="pageActiv" value={""+page} className="input_page" onChange={(e)=>{
                                                ((Number(e.target.value))<=maxpage)&&((Number(e.target.value))>=1)?
                                                setPage(Number(e.target.value)):
                                                console.log("");
                                                
                                }} />
                                <Button onClick={()=>{setPage(superiorNumpubPage)}} className={"custom_color_page"}>
                                        {superiorNumpubPage}
                                </Button>{' '}
                                <Button onClick={()=>{page==maxpage?setPage(maxpage):setPage(page+1)}} className={"custom_color_page"}>
                                        <i className="bi bi-chevron-right"></i>
                                </Button>{' '}
                                <Button onClick={()=>{setPage(maxpage)}} className={"custom_color_page"}>
                                        <i className="bi bi-chevron-double-right"></i>
                                </Button>{' '}
                        </ButtonGroup>
                </ButtonToolbar>
        </>
  );
}

export default HorizontalPagination;