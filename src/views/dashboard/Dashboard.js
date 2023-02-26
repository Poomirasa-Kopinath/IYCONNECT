import React from 'react'
import ApexCharts from 'apexcharts'
import { useEffect } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardTitle,
  CCardText,
  CFormCheck
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from 'react-icons/ai';
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import Calendar from './components/Calendar'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  var options = {
    series: [{
      name: 'Perform invoices',
      data: [44, 55]
    }, {
      name: 'Unpaid invoices',
      data: [76, 85]
    }, {
      name: 'Paid invoices',
      data: [35, 41]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '75%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: 0,
      style: {
        colors: ['#8859cf', '#009ceb', '#00c4d1']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent']
    },
    legend: {
      show: 1,
      labels: {
        colors: ['#8859cf', '#009ceb', '#00c4d1'],
      }
    },
    xaxis: {
      categories: ['Feb', 'Mar'],
      labels: {
        show: 0
      }
    },
    yaxis: {
      title: {
        text: ''
      },
      labels: {
        show: 0
      }
    },
    fill: {
      opacity: 1,
      colors: ['#8859cf', '#009ceb', '#00c4d1']
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: 0
        }
      },
      yaxis: {
        lines: {
          show: 1
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    }
  };
  var options2 = {
    series: [
      {
        name: "Perform",
        data: [10, 15, 25, 31, 49, 62, 69, 30, 25]
      },
      {
        name: "UN paid",
        data: [20, 41, 120, 30, 100, 125, 69, 120, 148]
      },
      {
        name: "PAID",
        data: [30, 41, 35, 51, 20, 62, 69, 91, 50]
      }
    ],
    chart: {
      height: 436,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: 'smooth',
      colors: ['#8859cf', '#009ceb', '#00c4d1']
    },
    title: {
      text: '',
      align: 'left'
    },

    grid: {
      xaxis: {
        lines: {
          show: 0
        }
      },
      yaxis: {
        lines: {
          show: 1
        }
      },
      row: {
        opacity: 0
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        show: 0
      }
    },
    yaxis: {
      title: {
        text: ''
      },
      labels: {
        show: 0
      }
    },
  };

  var options3 = {
    series: [{
      name: 'Client in Progress',
      data: [44, 55, 41, 37, 22, 43, 21]
    }, {
      name: 'Client Overide',
      data: [53, 32, 33, 52, 13, 43, 32]
    }, {
      name: 'Task in Progress',
      data: [12, 17, 11, 9, 15, 11, 20]
    }, {
      name: 'Task Overdue',
      data: [9, 7, 5, 8, 6, 9, 4]
    }, {
      name: 'Yet to Start',
      data: [25, 12, 19, 32, 25, 24, 10]
    }],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    fill: {
      colors: ['#4988db', '#ff7b28', '#a7a7a7', '#ffca00', '#464fc9']
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: ''
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        style: {
          colors: 'white'
        },
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: 'white'
        }
      },
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
      labels: {
        colors: ['white'],
      },
    },
    grid: {
      show: 1,
      xaxis: {
        lines: {
          show: 1
        }
      },
      yaxis: {
        lines: {
          show: 0
        }
      }
    }
  };
  var registeredClients = {
    series: [{
      data: [21, 22, 10, 28]
    }],
    chart: {
      height: 250,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    fill: {
      opacity: 1,
      colors: ['#175ca9cc', '#175ca9cc', '#175ca9cc', '#175ca9cc']
    },

    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        ['CORPORATE'],
        ['SOLE TRADER'],
        ['INDIVIDUAL'],
        ['PARTNERSHIP']
      ],
      labels: {
        style: {
          colors: ['#175ca9cc', '#175ca9cc', '#175ca9cc', '#175ca9cc'],
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      title: {
        text: ''
      },
      labels: {
        show: 0
      }
    },
    grid: {
      show: false,
    }
  };
  var OnboardingClients = {
    series: [{
      data: [21, 22, 10, 28]
    }],
    chart: {
      height: 250,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    fill: {
      opacity: 1,
      colors: ['#175ca9cc', '#175ca9cc', '#175ca9cc', '#175ca9cc']
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        ['CORPORATE'],
        ['SOLE TRADER'],
        ['INDIVIDUAL'],
        ['PARTNERSHIP']
      ],
      labels: {
        style: {
          colors: ['#175ca9aa', '#175ca9aa', '#175ca9aa', '#175ca9aa'],
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      title: {
        text: ''
      },
      labels: {
        show: 0
      }
    },
    grid: {
      show: false,
    }
  };
  var ProspectClients = {
    series: [{
      data: [21, 22]
    }],
    chart: {
      height: 250,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    fill: {
      opacity: 1,
      colors: ['#175ca9cc', '#175ca9cc']
    },

    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        ['CORPORATE'],
        ['SOLE TRADER']
      ],
      labels: {
        style: {
          colors: ['#175ca9aa', '#175ca9aa', '#175ca9aa', '#175ca9aa'],
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      title: {
        text: ''
      },
      labels: {
        show: 0
      }
    },
    grid: {
      show: false,
    }
  };

  var serviceWiseStatus = {
    series: [{
      name: 'Client in Progress',
      data: [44, 55, 45, 44, 55, 45]
    }, {
      name: 'Client Overdude',
      data: [76, 85, 34, 44, 55, 45]
    }, {
      name: 'Pending',
      data: [35, 41, 24, 44, 55, 40]
    },
    {
      name: 'Task in Progress',
      data: [35, 41, 56, 44, 55, 45]
    },
    {
      name: 'Task Overdue',
      data: [35, 41, 10, 46, 50, 55]
    },
    {
      name: 'Yet to Start',
      data: [35, 41, 20, 44, 45, 60]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    fill: {
      colors: ['#8859cf', '#009ceb', '#00c4d1']
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['AA', 'CS', 'CT', 'PAYE', 'Pension', 'VAT']
    },
    yaxis: {
      title: {
        text: ''
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    },
    grid: {
      show: 1,
      xaxis: {
        lines: {
          show: 0
        }
      },
      yaxis: {
        lines: {
          show: 1
        }
      }
    }
  };

  function openTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function openTab2(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  }

  useEffect(() => {
    var chart = new ApexCharts(document.querySelector("#Column-chart"), options);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#Bar-chart"), options3);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#Bar-chart2"), options3);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#Registered-Clients-Chart"), registeredClients);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#Onboarding-Clients-Chart"), OnboardingClients);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#Prospect-Clients-Chart"), ProspectClients);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#Service-Wise-Status"), serviceWiseStatus);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#Service-Wise-Status2"), serviceWiseStatus);
    chart.render();
    // var checkList = document.getElementById('list1');
    // checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
    //   if (checkList.classList.contains('visible'))
    //     checkList.classList.remove('visible');
    //   else
    //     checkList.classList.add('visible');
    // }
    // var checkList2 = document.getElementById('list2');
    // checkList2.getElementsByClassName('anchor')[0].onclick = function (evt) {
    //   if (checkList2.classList.contains('visible'))
    //     checkList2.classList.remove('visible');
    //   else
    //     checkList2.classList.add('visible');
    // }
  });

  return (
    <>
      <CCard style={{ backgroundImage: 'linear-gradient(to top, #fff, #f5fcff)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', background: 'white', padding: '1rem', borderBottom: '1px solid #d8dbe0' }}>
          <h2 style={{ fontSize: '0.875rem', color: '#333' }}>Welcome IYKONS</h2>
          <h2 style={{ fontSize: '0.875rem', color: '#333' }}>Wednesday, February 22,2023</h2>
        </div>
        <div style={{ padding: '1rem' }}>
          <h1 style={{ fontSize: '15px', fontWeight: 600, textDecoration: 'underline', color: '#175ca9' }}>LATEST HEADLINES</h1>
          <div style={{ display: 'flex' }}>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#666' }}>EY to pay $100 mln to settle U.S. charges of staff cheating on accountant exams</h3>
              <p style={{ fontSize: '13px', color: '#666' }}>
                The London-based auditor EY admitted to the charges and agreed to pay what the SEC said is its largest fine against an auditor.
                EY will pay $100 million to settle U.S. Securities and Exchange Commission (SEC) charges that its auditors cheated on certified
                public accounting (CPA) exams and that it misled the agency's investigators.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#666' }}>ACCA calls for women to play a reinforced role in race to net-zero</h3>
              <p style={{ fontSize: '13px', color: '#666' }}>
                Sectors benefiting the most from the transition to net-zero are utilities, construction and manufacturing and the
                issue with these sectors is there is a very low percentage of women making up the workforce
              </p>
            </div>
          </div>
        </div>
      </CCard>
      <CRow className="mt-4">
        <CCol sm={4}>
          <CCard style={{ backgroundColor: '#175ca912' }}>
            <CCardBody>
              <CCardTitle>Registered Clients <span style={{ float: 'right' }}>405</span></CCardTitle>
              <CCardText id="Registered-Clients-Chart">
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm={4}>
          <CCard style={{ backgroundColor: '#175ca912' }}>
            <CCardBody >
              <CCardTitle>Onboarding Clients <span style={{ float: 'right' }}>101</span></CCardTitle>
              <CCardText id="Onboarding-Clients-Chart">
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm={4}>
          <CCard style={{ backgroundColor: '#175ca912' }}>
            <CCardBody >
              <CCardTitle>Prospect Clients <span style={{ float: 'right' }}>201</span></CCardTitle>
              <CCardText id="Prospect-Clients-Chart">
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow className="mt-4">
        <CCol sm={6} className="m-auto">
          <div style={{ height: '500px', background: 'white', padding: "1rem" }}>
            <CCardTitle>Invoice Data</CCardTitle>
            <Calendar />
            <div style={{ display: 'flex', justifyContent: 'center', columnGap: '3rem', marginTop: '2rem' }}>
              <p style={{ margin: '0' }}>Invoice Count</p>
              <p style={{ margin: '0' }}>Invoice Amount</p>
            </div>
            <CCardText id="Column-chart">
            </CCardText>
          </div>
        </CCol>
        <CCol sm={6}>
          <div style={{ height: '500px' }}>
            {/* <div className="tab">
              <button className="tablinks" onClick={(e) => openTab(e, 'tab1')}>Things To Follow</button>
              <button className="tablinks" onClick={(e) => openTab(e, 'tab3')}>Things To Do</button>
            </div> */}
            {/* <CCard id="tab1" className="p-4 tabcontent">
              <div>
                <div id="list1" className="dropdown-check-list" tabIndex="100">
                  <span className="anchor">SELECT ALL</span>
                  <ul className="items">
                    <CFormCheck id="flexCheckChecked" label="CORPORATE" defaultChecked />
                    <CFormCheck id="flexCheckChecked" label="SOLE TRADER" defaultChecked />
                    <CFormCheck id="flexCheckChecked" label="INDIVIDUAL" defaultChecked />
                    <CFormCheck id="flexCheckChecked" label="PARTNERSHIP" defaultChecked />
                  </ul>
                </div>
                <div id="list2" className="dropdown-check-list" tabIndex="100">
                  <span className="anchor">SELECT ALL</span>
                  <ul className="items">
                    <CFormCheck id="flexCheckChecked" label="VAT" defaultChecked />
                    <CFormCheck id="flexCheckChecked" label="CT" defaultChecked />
                    <CFormCheck id="flexCheckChecked" label="PAVE" defaultChecked />
                    <CFormCheck id="flexCheckChecked" label="PENSION" defaultChecked />
                    <CFormCheck id="flexCheckChecked" label="AA" defaultChecked />
                    <CFormCheck id="flexCheckChecked" label="AA" defaultChecked />
                    <CFormCheck id="flexCheckChecked" label="CS" defaultChecked />
                  </ul>
                </div>
                <table style={{ width: '100%', textAlign: 'center', height: '278px' }}>
                  <thead>
                    <tr style={{ background: 'blue', color: 'black', height: '50px' }}>
                      <th style={{ background: '#ffef93' }}>EMPLOYEE</th>
                      <th style={{ background: '#dae9f6' }}>Task in Progress</th>
                      <th style={{ background: '#ffef93' }}>Task Overdue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{}}>
                      <td style={{ background: 'white' }}>USER 1</td>
                      <td style={{ background: '#ffcd93' }}>157</td>
                      <td style={{ background: '#ffcd93' }}>180</td>
                    </tr>
                    <tr style={{}}>
                      <td style={{ background: 'white' }}>USER 1</td>
                      <td style={{ background: '#ffcd93' }}>157</td>
                      <td style={{ background: '#ffcd93' }}>180</td>
                    </tr>
                    <tr>
                      <td style={{ background: 'white' }}>USER 1</td>
                      <td style={{ background: '#ffcd93' }}>157</td>
                      <td style={{ background: '#ffcd93' }}>180</td>
                    </tr>
                    <tr>
                      <td style={{ background: 'white' }}>USER 1</td>
                      <td style={{ background: '#ffcd93' }}>157</td>
                      <td style={{ background: '#ffcd93' }}>180</td>
                    </tr>
                    <tr style={{ background: '#0000ff1f' }}>
                      <td style={{ background: 'white' }}>USER 1</td>
                      <td style={{ background: '#ffcd93' }}>157</td>
                      <td style={{ background: '#ffcd93' }}>180</td>
                    </tr>
                    <tr style={{ background: '#0000ff1f' }}>
                      <td style={{ background: 'white' }}>USER 1</td>
                      <td style={{ background: '#ffcd93' }}>157</td>
                      <td style={{ background: '#ffcd93' }}>180</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr style={{ background: 'white' }}>
                      <td >Total</td>
                      <td></td>
                      <td>Load More....</td>
                    </tr>
                    <tr style={{ background: '#f2f2f2' }}>
                      <td style={{ background: 'white' }}>Total</td>
                      <td style={{ color: '#fd7b00' }}>2598</td>
                      <td style={{ color: '#fd7b00' }}>1806</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CCard >
            <CCard id="tab3" className="p-4 tabcontent">
              <div style={{ height: "398px" }}>
                <table className="m-auto" style={{ width: '80%' }}>
                  <thead>
                    <tr style={{ background: '#175ca9', color: 'white', height: '50px' }}>
                      <th>Services</th>
                      <th>Task in Progress</th>
                      <th>Task Overdue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: '#f2edf9', height: '40px' }}>
                      <td>As Hoc</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr style={{ height: '40px' }}>
                      <td>My task</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CCard> */}
          </div >
        </CCol>
      </CRow>

      <div>
        <div className="tab">
          <button className="tablinks" onClick={(e) => openTab(e, 'tab1')}>Things To Follow</button>
          <button className="tablinks" onClick={(e) => openTab(e, 'tab2')}>Things To Do</button>
        </div>
        <div id="tab1" className="p-4 tabcontent">
          <div className="tab">
            <button className="tablinks" onClick={(e) => openTab2(e, 'subtab1')}>User Wise Data</button>
            <button className="tablinks" onClick={(e) => openTab2(e, 'subtab2')}>Service wise status</button>
          </div>
          <CCard id="subtab1" className="p-4 tabcontent2" style={{ background: '#575757' }}>
            <CCardBody>
              <CCardTitle style={{ color: 'white' }}>User Wise Data</CCardTitle>
              <CCardText id="Bar-chart">
              </CCardText>
            </CCardBody>
          </CCard>
          <CCard id="subtab2" className="p-4 tabcontent2">
            <CCardBody>
              <CCardTitle>Service wise status</CCardTitle>
              <CCardText id="Service-Wise-Status">
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
        <div id="tab2" className="p-4 tabcontent">
          <div className="tab">
            <button className="tablinks" onClick={(e) => openTab2(e, 'subtab3')}>User Wise Data</button>
            <button className="tablinks" onClick={(e) => openTab2(e, 'subtab4')}>Service wise status</button>
          </div>
          <CCard id="subtab3" className="p-4 tabcontent2" style={{ background: '#575757' }}>
            <CCardBody>
              <CCardTitle style={{ color: 'white' }}>User Wise Data</CCardTitle>
              <CCardText id="Bar-chart2">
              </CCardText>
            </CCardBody>
          </CCard>
          <CCard id="subtab4" className="p-4 tabcontent2">
            <CCardBody>
              <CCardTitle>Service wise status</CCardTitle>
              <CCardText id="Service-Wise-Status2">
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
      </div>

      <div className="mt-4">
        <CCard className="p-4">
          <h1 style={{ color: "#175ca9", fontSize: "17px" }}>Things To Approve</h1>
          <div>
            <table className="m-auto" style={{ width: '80%' }}>
              <thead>
                <tr style={{ background: '#175ca9', color: 'white', height: '50px' }}>
                  <th>Applied By</th>
                  <th>Leave Type</th>
                  <th>Leave Mode</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Applied On</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f2edf9', height: '40px' }}>
                  <td>SUVARAKA</td>
                  <td>Medical</td>
                  <td>Full Day</td>
                  <td>30-01-2023</td>
                  <td>31-01-2023</td>
                  <td>15-02-2023</td>
                  <td><AiOutlineCheckSquare style={{ color: 'green', marginRight: '.5rem' }} /><AiOutlineCloseSquare style={{ color: 'red' }} /></td>
                </tr>
                <tr style={{ height: '40px' }}>
                  <td>SUVARAKA</td>
                  <td>Medical</td>
                  <td>Casual</td>
                  <td>30-01-2023</td>
                  <td>31-01-2023</td>
                  <td>15-02-2023</td>
                  <td><AiOutlineCheckSquare style={{ color: 'green', marginRight: '.5rem' }} /><AiOutlineCloseSquare style={{ color: 'red' }} /></td>
                </tr>
                <tr style={{ height: '40px' }}>
                  <td>SUVARAKA</td>
                  <td>Medical</td>
                  <td>Casual</td>
                  <td>30-01-2023</td>
                  <td>31-01-2023</td>
                  <td>15-02-2023</td>
                  <td><AiOutlineCheckSquare style={{ color: 'green', marginRight: '.5rem' }} /><AiOutlineCloseSquare style={{ color: 'red' }} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CCard>
      </div >

      <div className="row">
        <div className="col-xl-12">
          <div id="panel-2" className="panel">
            <div className="panel-hdr">
              <h2><span id="lblContent">  My Diary </span></h2>
            </div>
            <div className="panel-container show">
              <div className="panel-content bg-subtlelight-fade">
                <div id="calender" className="fc fc-unthemed fc-ltr">
                  <div className="fc-toolbar fc-header-toolbar">
                    <div className="fc-left">
                      <div className="fc-button-group"><button type="button" className="fc-prev-button fc-button fc-state-default fc-corner-left">
                        <span className="fc-icon fc-icon-left-single-arrow"></span></button>
                        <button type="button" className="fc-next-button fc-button fc-state-default fc-corner-right"><span className="fc-icon fc-icon-right-single-arrow">
                        </span></button>
                      </div>
                      <button type="button" className="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled" disabled="">today</button></div>
                    <div className="fc-right">
                      <div className="fc-button-group">
                        <button type="button" className="fc-month-button fc-button fc-state-default fc-corner-left">month</button>
                        <button type="button" className="fc-basicWeek-button fc-button fc-state-default fc-state-active">week</button>
                        <button type="button" className="fc-basicDay-button fc-button fc-state-default">day</button>
                        <button type="button" className="fc-agenda-button fc-button fc-state-default fc-corner-right">agenda</button>
                      </div></div><div className="fc-center"><h2>Feb 5 – 11, 2023</h2></div><div className="fc-clear"></div></div>
                  <div className="fc-view-container">
                    <div className="fc-view fc-basicWeek-view fc-basic-view">
                      <table>
                        <thead className="fc-head">
                          <tr><td className="fc-head-container fc-widget-header"><div className="fc-row fc-widget-header">
                            <table><thead><tr><th className="fc-day-header fc-widget-header fc-sun fc-past" data-date="2023-02-05"><span>Sun 2/5</span></th>
                              <th className="fc-day-header fc-widget-header fc-mon fc-past" data-date="2023-02-06"><span>Mon 2/6</span></th>
                              <th className="fc-day-header fc-widget-header fc-tue fc-past" data-date="2023-02-07"><span>Tue 2/7</span></th>
                              <th className="fc-day-header fc-widget-header fc-wed fc-past" data-date="2023-02-08"><span>Wed 2/8</span></th>
                              <th className="fc-day-header fc-widget-header fc-thu fc-past" data-date="2023-02-09"><span>Thu 2/9</span></th>
                              <th className="fc-day-header fc-widget-header fc-fri fc-past" data-date="2023-02-10"><span>Fri 2/10</span></th>
                              <th className="fc-day-header fc-widget-header fc-sat fc-today" data-date="2023-02-11">
                                <span>Sat 2/11</span>
                              </th>
                            </tr></thead></table></div></td></tr></thead><tbody className="fc-body"><tr><td className="fc-widget-content">
                              <div className="fc-scroller fc-day-grid-container" style={{ overflow: 'hidden', height: '377.883px' }}>
                                <div className="fc-day-grid fc-unselectable">
                                  <div className="fc-row fc-week fc-widget-content fc-rigid" style={{ height: '377px' }}>
                                    <div className="fc-bg"><table><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-past" data-date="2023-02-05"></td>
                                      <td className="fc-day fc-widget-content fc-mon fc-past" data-date="2023-02-06"></td>
                                      <td className="fc-day fc-widget-content fc-tue fc-past" data-date="2023-02-07"></td>
                                      <td className="fc-day fc-widget-content fc-wed fc-past" data-date="2023-02-08"></td>
                                      <td className="fc-day fc-widget-content fc-thu fc-past" data-date="2023-02-09"></td>
                                      <td className="fc-day fc-widget-content fc-fri fc-past" data-date="2023-02-10"></td>
                                      <td className="fc-day fc-widget-content fc-sat fc-today fc-state-highlight" data-date="2023-02-11"></td></tr></tbody></table></div>
                                    <div className="fc-content-skeleton">
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="fc-highlight-skeleton"><table><tbody><tr><td colSpan="3"></td><td className="fc-highlight" colSpan="1"></td><td colSpan="3"></td></tr></tbody></table></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-hidden="true" data-keyboard="false" data-backdrop="static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title"><span id="eventTitle"></span></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fal fa-times"></i></span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="row mb-3">
                          <div className="col-md-12">
                            <p id="pDetails" className="mb-3"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
