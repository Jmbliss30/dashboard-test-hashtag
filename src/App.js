import logo from './logo.svg';
import './App.css';
import bell from './svg/icon-ios7-bell-512.webp';

function App() {
  return (
    <div className='App'>
      <div className='Dashboard'>
        <div className='navbar-wrapper'>
          <div className='dashboard-wrapper'>
            <div className='navbar'>
              <div className='nav-left'>
                <nav class='navbar navbar-expand-lg  '>
                  <a class='navbar-brand' href='#'>
                    Logo
                  </a>
                  <button
                    class='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span class='navbar-toggler-icon'></span>
                  </button>

                  <div
                    class='collapse navbar-collapse'
                    id='navbarSupportedContent'
                  >
                    <ul class='navbar-nav mr-auto'>
                      <li class='nav-item active'>
                        <a class='nav-link' href='#'>
                          Dashboard
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a class='nav-link' href='#'>
                          Claims
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a class='nav-link' href='#'>
                          Eligibility
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a class='nav-link' href='#'>
                          Resource
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className='nav-right'>
                <div>
                  <button className='btn-provdier'>+ Find a provider</button>
                </div>
                <div className='svg-svg'>
                  <img className='svg-img' src={bell}></img>
                </div>
                <div className='user-img'>
                  <div className='user-icon'></div>
                </div>
                <div className='user-name'>
                  <p className='userpara'>Alxeandra Messer</p>
                  <p className='userparaid'>ID: 120068235</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='dashboard-wrapper'>
          <div className='first-section'>
            <div className='left-40'>
              <div className='first-sec'>
                <h4 className='memberh1'>Welcome to Your Dashboard</h4>
                <hr className='mmbrHr'></hr>
                <h4 className='memberh4'>1232-4567-8901</h4>
                <p className='memberid'>Member ID</p>

                <div className='sectionOne-LastBlock'>
                  <div className='first-sec-last-left'>
                    <h4 className='usrName'>Alxeandra Messer</h4>
                    <p className='memberSince'>Member since 7/12/2019</p>
                  </div>
                  <div className='first-sec-last-right'>
                    <p className='memberId'> View Your Member ID Card </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='right-60'>
              <div className='plansandbtns'>
                <h4 className='right-h4'>Active Plans</h4>
                <div className='btn-right-left'>
                  <button className='btn-rght-lft'></button>
                  <button className='btn-rght-lft'></button>
                </div>
              </div>

              <div className='plans-collections'>
                <div className='right-25' id='red25'>
                  <div className='inner-title'>Medical</div>
                  <div className='inner-title-p'>
                    <p className='inner-p'>Care Plus PHD5000</p>
                  </div>
                  <button className='inner-btn'>VIEW MORE</button>
                </div>
                <div className='right-25' id='yellow25'>
                  <div className='inner-title' id='title-yellow'>
                    Pharmacy
                  </div>
                  <div className='inner-title-p'>
                    <p className='inner-p'>Rx BIN 610014 GRP: EMIARXD</p>
                  </div>
                  <button className='inner-btn'>VIEW MORE</button>
                </div>
                <div className='right-25' id='blue25'>
                  <div className='inner-title' id='title-blue'>
                    Dental
                  </div>
                  <div className='inner-title-p'>
                    <p className='inner-p'>Choice PPO PHD5000</p>
                  </div>
                  <button className='inner-btn'>VIEW MORE</button>
                </div>
                <div className='right-25' id='blue25'>
                  <div className='inner-title' id='title-blue'>
                    Vision
                  </div>
                  <div className='inner-title-p'>
                    <p className='inner-p'>VSP 10-130 PHD5000</p>
                  </div>
                  <button className='inner-btn'>VIEW MORE</button>
                </div>
              </div>
            </div>
          </div>

          <div className='second-section'>
            <div className='Accumulators'>
              <div className='sec-left-40'>
                <h4 className='accumulators-h4'>Accumulators</h4>
                <div class='input-group mb-3 collection-btns'>
                  <button
                    class='btn btn-outline-secondary dropdown-toggle collectonbtns'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Dropdown
                  </button>

                  <button
                    class='btn btn-outline-secondary dropdown-toggle collectonbtns'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Dropdow
                  </button>
                  <button
                    class='btn btn-outline-secondary dropdown-toggle collectonbtns'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Dropdown
                  </button>
                  <button
                    class='btn btn-outline-secondary dropdown-toggle collectonbtns'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                  >
                    Dropdown
                  </button>
                </div>

                <div className='functionality-progress'>
                  <p className='fnct-p'>Out-of-Pocket Max</p>
                  <div id='cont' data-pct='100'>
                    <svg
                      id='svg'
                      width='200'
                      height='200'
                      viewPort='0 0 100 100'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        r='90'
                        cx='100'
                        cy='100'
                        fill='transparent'
                        stroke-dasharray='565.48'
                        stroke-dashoffset='0'
                      ></circle>
                      <circle
                        id='bar'
                        r='90'
                        cx='100'
                        cy='100'
                        fill='transparent'
                        stroke-dasharray='565.48'
                        stroke-dashoffset='0'
                      ></circle>
                    </svg>
                  </div>{' '}
                </div>

                <div className='bar-wrapper'>
                  <span className='progressSpan'>Deductable</span>
                  <div className='progressbar'>
                    <div class='progress'>
                      <div class='skill html'></div>
                    </div>
                    <span className='skllspn'>$3,686</span>
                  </div>

                  <span className='progressSpan'>Out-of-Pocket</span>
                  <div className='progressbar'>
                    <div class='progress'>
                      <div class='skill html' id='progress-green'></div>
                    </div>
                    <span className='skllspn'>$2,614</span>
                  </div>
                </div>
              </div>
              <div className='sec-right-60'>
                <div className='claims'>
                  <div className='claims-h1'>
                    <h4 className='claims-recent'>Recent Claims</h4>
                  </div>
                  <div className='browse-more'>
                    <p className='rcnt-claims-p'>Browse More Claims </p>
                  </div>
                </div>
                <div className='second-dropdowns'>
                  <div className='dropdowns-second-sec'>
                    <button
                      class='btn btn-outline-secondary dropdown-toggle'
                      type='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Dropdown
                    </button>
                    <button
                      class='btn btn-outline-secondary dropdown-toggle'
                      type='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Dropdown
                    </button>
                    <button
                      class='btn btn-outline-secondary dropdown-toggle'
                      type='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Dropdown
                    </button>
                    <button
                      class='btn btn-outline-secondary dropdown-toggle'
                      type='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Dropdown
                    </button>
                  </div>
                  <div className='totalsum'>
                    <span>
                      Total Sum : <span id='green-money'> $8,740</span>
                    </span>
                  </div>
                </div>
                <div className='third-row'>
                  <div className='third-row-width'>
                    <hr id='green'></hr>
                    <li>Medical transactions</li>
                  </div>
                  <div className='third-row-width'>
                    <hr id='darkblue'></hr>
                    <li>Medical transactions</li>
                  </div>
                  <div className='third-row-width'>
                    <hr id='blue'></hr>
                    <li>Medical transactions</li>
                  </div>
                  <div className='third-row-width'>
                    <hr id='yellow'></hr>
                    <li>Medical transactions</li>
                  </div>
                </div>

                <div className='fourth-row'>
                  <table class='table'>
                    <thead>
                      <tr id='tablehead'>
                        <th scope='col' className='tableHead'>
                          Claim Descripton
                        </th>
                        <th scope='col' className='tableHead'>
                          Date
                        </th>
                        <th scope='col' className='tableHead'>
                          Cost
                        </th>
                        <th scope='col' className='tableHead'>
                          Status
                        </th>
                        <th scope='col'></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Provider visit at Intermountain Medical</td>
                        <td>06/29/2022</td>
                        <td>$1256.23</td>
                        <td>Pending</td>
                        <td>
                          <button className='eob'>View EOB</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Dentist visit at Taylor Dental</td>
                        <td>07/11/2024</td>
                        <td>$1256.23</td>
                        <td>Paid</td>
                        <td>
                          <button className='eob'>View EOB</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Provider visit to Standard Optical</td>
                        <td>06/06/2023</td>
                        <td>$1256.23</td>
                        <td>Paid</td>
                        <td>
                          <button className='eob'>View EOB</button>
                        </td>
                      </tr>

                      <tr>
                        <td>Provider visit to Urgent Care</td>
                        <td>16/21/2025</td>
                        <td>$1256.23</td>

                        <td>Paid</td>
                        <td>
                          <button className='eob'>View EOB</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Orthodpedist visit at Intermountain </td>
                        <td>26/29/2022</td>
                        <td>$1256.23</td>
                        <td>Denied</td>
                        <td>
                          <button className='eob'>View EOB</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='pagination'>
                  <button className='paginaton'>1</button>
                  <button className='paginaton'>2</button>
                  <button className='paginaton'>3</button>
                  <button className='paginaton'>4</button>
                  <button className='paginaton'>5</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
