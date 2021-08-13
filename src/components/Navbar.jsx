import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Offcanvas} from 'react-bootstrap';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	let history = useHistory()
	
  function HelloPg(){
    history.push('/')
	}

	function VehiclesPg(){
    history.push('/Vehicles')
	}

	function PeoplesPg(){
    history.push('/Peoples')
	}

	return (
		<>
			<Offcanvas backdrop={false} show={show} onHide={handleClose} >
				<Offcanvas.Body>
					<div className="items-center text-center flex">
						<img className="w-12 h-12" src="https://icon-library.com/images/star-wars-logo-icon/star-wars-logo-icon-9.jpg" alt="" />
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>
								<span className="text-black text-center">Star Wars Vehicle</span>
							</Offcanvas.Title>
						</Offcanvas.Header>
					</div>
					<nav>
						<h3 onClick={()=>HelloPg()} className="block py-3 px-6 cursor-pointer text-black hover:bg-gray-500 rounded"> Hello </h3>
						<h3 onClick={()=>VehiclesPg()} className="block py-3 px-6 cursor-pointer text-black hover:bg-gray-500 rounded" > Vehicles </h3>
						<h3 onClick={()=>PeoplesPg()} className="block py-3 px-6 cursor-pointer text-black hover:bg-gray-500 rounded" > Peoples </h3>
					</nav>
				</Offcanvas.Body>
			</Offcanvas>
			<div>
				<img onClick={()=>handleShow()} className=" cursor-pointer h-14 w-15 p-2" src="https://icon-library.com/images/star-wars-logo-icon/star-wars-logo-icon-9.jpg" alt="" />
			</div>
		</>
	)
}
