import React from "react";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import './calender.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Calender_scheduling() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 calender-top d-flex">
            <div className="wrapper">
              <header>
                <p className="current-date">September 2022</p>
                <div className="icons">
                <span><FaLessThan /></span>
                <span><FaGreaterThan/></span>
                </div>
              </header>
              <div className="calendar">
                <ul className="weeks">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
                </ul>
                <ul className="days">
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>1</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8"></div>
        </div>
      </div>
    </>
  );
}
