import './history.css';
import React from "react";
import { Link } from 'react-router-dom';

 export const History = () => {
    return (
      <>
      <table className="containerr2">
      <thead>
		<tr>
			<th ><h1>Exams</h1></th>
			<th ><h1>Date</h1></th>
			<th><h1>Grade</h1></th>
		</tr>
	</thead>
      <tbody>
          <tr>
              <td>Methodology</td>
              <td>20/4/2023</td>
              <td>77</td>
          </tr>
          <tr>
              <td>Internet Application</td>
              <td>2/4/2023</td>
              <td>66</td>
          </tr>
          <tr>
              <td>Software</td>
              <td>2/2/2023</td>
              <td>88</td>
          </tr>
      <tr>
              <td>Database</td>
              <td>9/3/2023</td>
              <td>90</td>
          </tr>
      
      </tbody>
  </table>
      </>
    )
}

