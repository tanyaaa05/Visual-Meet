// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  const style404={
      height: '80vh',
      width: '-webkit-fill-available',
  }
  return (
    <div id='message'>
        <svg xmlns="http://www.w3.org/2000/svg" style={style404} enable-background="new 0 0 300 225" viewBox="0 0 300 225" >
      <path fill="#e6edf9"
        d="M134,150.3c25,0.7,81.7,20.1,96.3,0.2c29.9-40.5,7.6-92.2-25.8-120.6  c-12.4-10.5-32.2-3.3-44.2-0.8c-18.2,3.7-38.1-16-58.2-5.2c-18.3,9.9-14.6,33.2-22.1,46.5C69,89.8,42.6,113.7,63.5,142.1   C83.6,169.6,112,149.7,134,150.3z"
        class="colore6edf9 svgShape"></path>
      <ellipse cx="150" cy="189" fill="#e6edf9" rx="113.8" ry="15.3" class="colore6edf9 svgShape"></ellipse>
      <circle cx="70" cy="139.9" r="12.1" fill="#f15a24" class="colorf15a24 svgShape"></circle>
      <line x1="64" x2="76" y1="133.9" y2="145.9" fill="none" stroke="#fff" stroke-linecap="round"
        stroke-miterlimit="10" stroke-width=".291" class="colorStrokefff svgStroke"></line>
      <line x1="76" x2="64" y1="133.9" y2="145.9" fill="none" stroke="#fff" stroke-linecap="round"
        stroke-miterlimit="10" stroke-width=".291" class="colorStrokefff svgStroke"></line>
      <circle cx="57.7" cy="63.7" r="8.3" fill="#ffba00" class="colorffba00 svgShape"></circle>
      <line x1="53.6" x2="61.8" y1="59.6" y2="67.8" fill="none" stroke="#fff" stroke-linecap="round"
        stroke-miterlimit="10" stroke-width=".291" class="colorStrokefff svgStroke"></line>
      <line x1="61.8" x2="53.6" y1="59.6" y2="67.8" fill="none" stroke="#fff" stroke-linecap="round"
        stroke-miterlimit="10" stroke-width=".291" class="colorStrokefff svgStroke"></line>
      <circle cx="206.9" cy="44.6" r="4.9" fill="#07beb8" class="color07beb8 svgShape"></circle>
      <line x1="204.4" x2="209.3" y1="42.2" y2="47" fill="none" stroke="#fff" stroke-linecap="round"
        stroke-miterlimit="10" stroke-width=".291" class="colorStrokefff svgStroke"></line>
      <line x1="209.3" x2="204.4" y1="42.2" y2="47" fill="none" stroke="#fff" stroke-linecap="round"
        stroke-miterlimit="10" stroke-width=".291" class="colorStrokefff svgStroke"></line>
      <path fill="#3376dd"
        d="M66.2 107.2V95.9l25.9-36.8h15.4v36.1h6.7v11.9h-6.7v10.5h-14v-10.5H66.2zM94.7 74.5L81.1 95.2h13.6V74.5zM126.5 65.2c3.6-5.4 9.4-8 17.4-8 8 0 13.8 2.7 17.4 8 3.6 5.4 5.4 12.7 5.4 22 0 9.4-1.8 16.8-5.4 22.2-3.6 5.4-9.4 8-17.4 8-8 0-13.8-2.7-17.4-8-3.6-5.4-5.4-12.7-5.4-22.2C121.1 77.9 122.9 70.6 126.5 65.2zM151.3 74.6c-1.2-2.9-3.7-4.4-7.4-4.4-3.7 0-6.2 1.5-7.4 4.4-1.2 3-1.8 7.2-1.8 12.6 0 3.7.2 6.7.6 9.1.4 2.4 1.3 4.4 2.6 5.8 1.3 1.5 3.3 2.2 5.9 2.2 2.6 0 4.6-.7 5.9-2.2 1.3-1.5 2.2-3.4 2.6-5.8.4-2.4.6-5.5.6-9.1C153.1 81.8 152.5 77.6 151.3 74.6zM174.2 107.2V95.9L200 59.1h15.5v36.1h6.4v11.9h-6.4v10.5h-14v-10.5H174.2zM202.4 74.5L189 95.2h13.4V74.5z"
        class="color3376dd svgShape"></path>
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
        d="M101.3 143.4c0 0 7.2-6.5 9-4.6 1.9 2-5.4 8.6-6.2 7.4s4.4-4.3 6.2-3.9c1.8.4-.6 7.1-2.2 6.2-1.7-1 3.4-3.5 4.3-1.9.7 1.1-2.5 5.7-2.5 5.7M253.1 105.5c0 0 7.7 1.1 7.5 3.2-.3 2.2-8.1 1.2-7.7 0 .4-1.1 4.9.5 5.6 1.8s-4.7 3.3-4.9 1.9c-.3-1.6 3.9.3 3.4 1.6-.3 1-4.8 1.4-4.8 1.4M173.4 59.2c0 0 5.4-1.1 5.7.4.3 1.5-5.1 2.7-5.1 1.8s3.4-.8 4.2-.1c.8.7-2.3 3.3-2.8 2.4-.5-1 2.7-.7 2.7.3 0 .7-2.9 2.1-2.9 2.1"
        class="colorStroke000 svgStroke"></path>
      <g fill="#000000" class="color000 svgShape">
        <path fill="#3376dd"
          d="M101.1 42.3c-.2.4-.5.7-1 1s-1 .4-1.6.4H97v2.6h-1.7v-7.9h3.2c.6 0 1.2.1 1.6.3.4.2.8.5 1 .9.2.4.3.8.3 1.3C101.4 41.5 101.3 41.9 101.1 42.3zM99.2 41.8c.2-.2.3-.4.3-.7s-.1-.6-.3-.8c-.2-.2-.5-.3-.8-.3H97v2h1.3C98.7 42 99 41.9 99.2 41.8zM107.4 45.2h-3l-.5 1.2h-2l2.9-7.9h2.2l2.9 7.9h-2.1L107.4 45.2zM106.9 43.4l-1-2.9-1 2.9H106.9zM116.1 41.1c-.1-.3-.3-.5-.6-.6s-.6-.2-.9-.2c-.6 0-1.1.2-1.5.6-.4.4-.6 1-.6 1.6 0 .7.2 1.3.6 1.7s.9.6 1.6.6c.5 0 .9-.1 1.2-.3.3-.2.6-.7.7-1h-2.7V42h4.4v1.8c-.3.5-.4.9-.7 1.3-.3.4-.8.8-1.3 1-.5.3-1.1.4-1.8.4-.8 0-1.5-.2-2.1-.5-.6-.3-1.1-.8-1.4-1.4-.3-.6-.5-1.3-.5-2.1s.2-1.5.5-2.1c.3-.6.8-1.1 1.4-1.4.6-.3 1.3-.5 2.1-.5 1 0 1.8.3 2.4.7.7.5 1.1 1.1 1.3 2H116.1zM121.2 39.9v1.7h2.6v1.5h-2.6v1.7h2.9v1.5h-4.9v-7.9h4.9v1.5H121.2zM134.9 46.3h-1.7l-3.5-4.8v4.8h-1.7v-7.9h2l3.2 5v-5h1.7V46.3zM138.2 46c-.6-.3-1.1-.8-1.5-1.5-.4-.6-.5-1.3-.5-2.1 0-.8.2-1.5.5-2.1.4-.6.9-1.1 1.5-1.5.6-.3 1.3-.5 2.1-.5s1.4.2 2.1.5c.6.3 1.1.8 1.5 1.5.4.6.5 1.3.5 2.1 0 .8-.2 1.5-.5 2.1-.4.6-.9 1.1-1.5 1.5-.6.3-1.3.5-2.1.5S138.8 46.4 138.2 46zM141.8 44.1c.4-.4.6-1 .6-1.7 0-.7-.2-1.3-.6-1.7-.4-.4-.9-.6-1.5-.6-.6 0-1.2.2-1.5.6-.4.4-.6 1-.6 1.7 0 .7.2 1.3.6 1.7.4.4.9.6 1.5.6C140.9 44.8 141.4 44.6 141.8 44.1zM150.9 38.5v1.5h-2v6.4h-2v-6.4h-2v-1.5H150.9zM159.6 38.5v1.5h-3.2v1.7h2.3v1.5h-2.3v3.2h-2v-7.9H159.6zM162.4 46c-.6-.3-1.1-.8-1.5-1.5-.4-.6-.5-1.3-.5-2.1 0-.8.2-1.5.5-2.1.4-.6.9-1.1 1.5-1.5.6-.3 1.3-.5 2.1-.5s1.4.2 2.1.5c.6.3 1.1.8 1.5 1.5.4.6.5 1.3.5 2.1 0 .8-.2 1.5-.5 2.1-.4.6-.9 1.1-1.5 1.5-.6.3-1.3.5-2.1.5S163 46.4 162.4 46zM166 44.1c.4-.4.6-1 .6-1.7 0-.7-.2-1.3-.6-1.7-.4-.4-.9-.6-1.5-.6-.6 0-1.2.2-1.5.6-.4.4-.6 1-.6 1.7 0 .7.2 1.3.6 1.7.4.4.9.6 1.5.6C165.1 44.8 165.6 44.6 166 44.1zM171.3 38.5v4.8c0 .5.2.8.5 1.1.2.3.6.4 1.1.4.5 0 .8-.1 1-.4.2-.3.3-.6.3-1.1v-4.8h2v4.8c0 .7-.1 1.3-.4 1.8-.3.5-.7.9-1.2 1.1-.5.2-1.1.4-1.7.4-.6 0-1.2-.1-1.7-.4-.5-.2-.9-.6-1.2-1.1-.3-.5-.5-1.1-.5-1.8v-4.8H171.3zM184.7 46.3h-1.9l-3.4-4.8v4.8h-2v-7.9h2.1l3.1 5v-5h2V46.3zM191.3 39c.6.3 1.1.8 1.5 1.4.3.6.5 1.3.5 2.1 0 .8-.2 1.5-.5 2.1-.3.6-.8 1-1.5 1.3s-1.4.4-2.2.4h-3v-7.9h3C189.9 38.5 190.7 38.7 191.3 39zM190.7 44.2c.4-.4.6-1 .6-1.7 0-.7-.2-1.3-.6-1.7s-1-.6-1.7-.6h-1.1v4.7h1.1C189.7 44.9 190.3 44.6 190.7 44.2z"
          class="color3376dd svgShape"></path>
      </g>
      <g fill="#000000" class="color000 svgShape">
        <path fill="#fb9a78"
          d="M141.2,139.8l-2.8-4.4c-0.2-0.4-0.6-0.7-1-0.9l-1.5-0.8c-0.3-0.2-0.7-0.2-1.1-0.2l-2.4,0.1    c-0.5,0-0.7,0.7-0.2,0.9l2.8,1.2l1,1.3l-4.5-1.1l-0.7,5.2c-0.1,1.1,0.5,2.1,1.6,2.5l6.1,2.1L141.2,139.8z"
          class="colorfb9a78 svgShape"></path>
        <path fill="#ff7300"
          d="M244.6,187.2c0,0.6-0.5,1.2-1.2,1.2h-82.7c-0.6,0-1.2-0.5-1.2-1.2v-69.3    c0-0.6,0.5-1.2,1.2-1.2h82.7c0.6,0,1.2,0.5,1.2,1.2V187.2z"
          class="colorff7300 svgShape"></path>
        <line x1="159.6" x2="244.6" y1="125.9" y2="125.9" fill="none" stroke="#000" stroke-linecap="round"
          stroke-miterlimit="10" stroke-width=".291" class="colorStroke000 svgStroke"></line>
        <path fill="#9c1e12"
          d="M207.7,107.3c0,0,1.5-1.9,5,0.3c3.2,2,2.9,6.5,3,9.3c0,1.1-0.8,1.4-0.8,2.5    c0,0.7,0.4,1.3,0.3,2.3c-0.1,0.4-0.6,1-0.7,1.4c-0.5,1.4,1.3,2.6,0,4.2c-1.2,1.5-3.8,1.8-5.2,0.5c-1.6-1.6-1.6-4.3-1.4-6.4    c0.2-1.5,1.3-2.8,1.4-4.3c0.1-1.1-0.4-1.8-0.3-2.9c0.2-1.5,2.6-2.4,1.5-3.3c-0.8-0.7-2.8,0.3-2.8,0.3V107.3z"
          class="color9c1e12 svgShape"></path>
        <ellipse cx="207" cy="109.2" fill="#07beb8" rx="2.1" ry="2.9" transform="rotate(-45.001 207.002 109.23)"
          class="color07beb8 svgShape"></ellipse>
        <path fill="#fb9a78"
          d="M182.4,139.8l-9.6,9l-32.3-9.2l-3.6,5.5l34.1,16.4c3,1.4,6.5,0.9,9-1.3l11.9-10.9      L182.4,139.8z"
          class="colorfb9a78 svgShape"></path>
        <line x1="172.8" x2="173.6" y1="148.8" y2="151" fill="none" stroke="#000" stroke-linecap="round"
          stroke-miterlimit="10" stroke-width=".291" class="colorStroke000 svgStroke"></line>
        <path fill="#007ffa"
          d="M226,137.1c-1-1.9-4.6-4.5-7.5-5.5c-3.5-1.2-22.2-3.7-30.2,0.8    c-8.9,5-12.4,13.8-12.4,13.8l7.7,12c0.2,11.9,0.6,24.9,0.2,30.2h37.6c0,0,0.6-7.5,0.9-26.8l3,1.5    C225.3,163.1,232.2,148.8,226,137.1z"
          class="color007ffa svgShape"></path>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M183.7,166.7c0,0,0.4-6.8-0.1-8.9s-1-8,2.2-11.6" class="colorStroke000 svgStroke"></path>
        <path fill="#fb9a78" d="M198,117.7h8.7v15.1c0,1.2-0.8,2.1-2,2.1h-4.5c-1.2,0-2.2-0.9-2.2-2.1V117.7z"
          class="colorfb9a78 svgShape"></path>
        <path fill="#f9744b" d="M203.3,123.2H198v5.8h2.8c1.5,0,2.5-1.1,2.5-2.5V123.2z" class="colorf9744b svgShape">
        </path>
        <path fill="#fb9a78"
          d="M196,109.8c-1,0-1.8,0.8-1.8,1.8l-0.4,10c-0.1,2.4,2,4.2,4.3,3.7l8.3-1.6v-13.9L196,109.8    z"
          class="colorfb9a78 svgShape"></path>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M199.2 113.3c0 0 2-.1 3.7 1.3M197.4 113.3c0 0-1.6.1-2.7.9" class="colorStroke000 svgStroke"></path>
        <ellipse cx="195.5" cy="116.5" fill="#3376dd" rx=".5" ry=".7" class="color3376dd svgShape"></ellipse>
        <ellipse cx="200.7" cy="116.5" fill="#3376dd" rx=".5" ry=".7" class="color3376dd svgShape"></ellipse>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M197.5 116.4l-1.3 2.2c-.2.3 0 .7.4.7h.5M199.2 121c0 0-1.7.3-3.1-.2" class="colorStroke000 svgStroke">
        </path>
        <path fill="#9c1e12"
          d="M207,123.1c0,0,6.4-12.1-0.3-14.3c0,0-4.5-5.5-10.2-1.7c0,0-6.5,1.8-2.3,6.6    c0,0,0.1-1.7,3.6-1.6c2.1,0,3.2-1,5,0.3c1.6,1.1,2.9,1.2,2.7,3.2C205.3,117.6,204.8,120.1,207,123.1z"
          class="color9c1e12 svgShape"></path>
        <path fill="#fb9a78"
          d="M177.5,176.6l-3.7-4.6l-4.8-0.5c-0.6-0.1-1.2,0-1.8,0.1l-3.5,1l-1,0     c-0.2,0-0.4,0-0.6,0.1l-4.3,1.7c-0.6,0.2-0.4,1.1,0.2,1.1l0,0l-0.9,0.6c-0.8,0.5-0.1,1.7,0.7,1.3l3.1-1.4l-2.1,1.9     c-0.6,0.5,0.1,1.4,0.8,1l4.7-3.1l-2,2.4c-0.5,0.6,0.3,1.4,0.9,0.9l2.5-2c0.4-0.3,1-0.5,1.5-0.4l3,0.3c0.1,0,0.2,0,0.3,0.1     l2.5,0.9c0.9,0.3,1.9,0.2,2.7-0.3L177.5,176.6z"
          class="colorfb9a78 svgShape"></path>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M158.1 175.4l3.7-2.2c.3-.2.6-.3 1-.4l1-.3M161 176l1.9-1.6c.4-.3.8-.6 1.3-.8l2.6-1M164.4 175.7l1.8-1c.2-.1.4-.2.7-.3l1.9-.6"
          class="colorStroke000 svgStroke"></path>
        <path fill="#fb9a78"
          d="M173.1,172.1l2.1,5.7l37.8,0.5c3.3,0,6.3-1.9,7.6-5l4.3-10.3l-12.1-5.8l-3.5,8.7      l-10.1,1.7"
          class="colorfb9a78 svgShape"></path>
        <line x1="199.1" x2="173.1" y1="167.7" y2="172.1" fill="#fb9a78"></line>
        <line x1="209.2" x2="210.9" y1="165.9" y2="167.7" fill="none" stroke="#000" stroke-linecap="round"
          stroke-miterlimit="10" stroke-width=".291" class="colorStroke000 svgStroke"></line>
        <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          points="215.2 142.2 210.1 155.8 225.3 163.2"></polyline>
        <ellipse cx="207" cy="117.4" fill="#fb9a78" rx="2.6" ry="2.1" transform="rotate(-45.001 206.956 117.404)"
          class="colorfb9a78 svgShape"></ellipse>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M207.9,118.7c0.8-0.8,0.9-1.9,0.2-2.5s-1.8-0.5-2.5,0.2" class="colorStroke000 svgStroke"></path>
        <circle cx="205.8" cy="119.8" r=".5" fill="#ffffff" class="colorfff svgShape"></circle>
        <g fill="#000000" class="color000 svgShape">
          <path fill="#fb9a78"
            d="M201,136.6c6.7-0.8,7-5.5,7.5-6.6c-3.6-0.3-7.6-0.3-11.3,0     C197.6,134.1,201,136.6,201,136.6z"
            class="colorfb9a78 svgShape"></path>
        </g>
        <g fill="#000000" class="color000 svgShape">
          <line x1="236" x2="240.6" y1="118.8" y2="123.4" fill="none" stroke="#000" stroke-linecap="round"
            stroke-miterlimit="10" stroke-width=".291" class="colorStroke000 svgStroke"></line>
          <line x1="240.6" x2="236" y1="118.8" y2="123.4" fill="none" stroke="#000" stroke-linecap="round"
            stroke-miterlimit="10" stroke-width=".291" class="colorStroke000 svgStroke"></line>
        </g>
        <g fill="#000000" class="color000 svgShape">
          <circle cx="139.1" cy="111.6" r="13" fill="#ffffff" opacity=".5" class="colorfff svgShape"></circle>
          <path fill="#f15a24"
            d="M136.8,125.4c-7.6-1.3-12.8-8.5-11.5-16.1c1.3-7.6,8.5-12.8,16.1-11.5      c7.6,1.3,12.8,8.5,11.5,16.1C151.7,121.5,144.4,126.7,136.8,125.4z M141.1,99.5c-6.6-1.1-12.9,3.4-14,10      c-1.1,6.6,3.4,12.9,10,14c6.6,1.1,12.9-3.4,14-10C152.2,106.9,147.7,100.6,141.1,99.5z"
            class="colorf15a24 svgShape"></path>
          <path fill="#f15a24"
            d="M139.7,125.5l-5.6-0.9l-0.5,2.9c0,0.1,0.1,0.3,0.2,0.3l5.1,0.9c0.1,0,0.3-0.1,0.3-0.2     L139.7,125.5z"
            class="colorf15a24 svgShape"></path>
          <rect width="3.2" height="2" x="134.5" y="128.1" fill="#ff7300" transform="rotate(9.495 136.107 129.132)"
            class="colorff7300 svgShape"></rect>
          <path fill="#ffba00"
            d="M137.7,130.4l-3.5-0.6c-0.2,0-0.3,0.1-0.3,0.2l-3,18c0,0.2,0.1,0.3,0.2,0.3l3.5,0.6     c0.2,0,0.3-0.1,0.3-0.2l3-18C137.9,130.6,137.8,130.4,137.7,130.4z"
            class="colorffba00 svgShape"></path>
          <path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
            d="M140.9,101c5.8,1,9.8,6.5,8.8,12.3" class="colorStrokefff svgStroke"></path>
        </g>
        <path fill="#fb9a78"
          d="M132.2,136l2.7,1.2c0.8,0.4,0.4,1.5-0.5,1.4l-2.4-0.5c-0.7-0.1-1.1-0.7-1-1.4l0-0.1    C131,136,131.6,135.7,132.2,136z"
          class="colorfb9a78 svgShape"></path>
        <path fill="#fb9a78"
          d="M131.9,142.3l1.2-0.1c0.2,0,0.3,0,0.5,0l1.7,0.4c0.5,0,0.9-0.5,0.6-0.9l-0.1-0.2l0.1-0.1    c0.7-0.3,0.8-1.3,0.1-1.7l-3-1.7c-0.7-0.4-1.5,0-1.7,0.7l-0.4,2.2C130.8,141.7,131.2,142.2,131.9,142.3z"
          class="colorfb9a78 svgShape"></path>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M132.2,136l2.7,1.2c0.8,0.4,0.4,1.5-0.5,1.4l-2.4-0.5" class="colorStroke000 svgStroke"></path>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M131.9,142.3l1.2-0.1c0.2,0,0.3,0,0.5,0l1.7,0.4c0.5,0,0.9-0.5,0.6-0.9l-0.1-0.2l0.1-0.1    c0.7-0.3,0.8-1.3,0.1-1.7l-2.5-1.4"
          class="colorStroke000 svgStroke"></path>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M135.7,141.5l-2-0.9c-0.2-0.1-0.4-0.1-0.6-0.2l-1.1-0.2" class="colorStroke000 svgStroke"></path>
        <path fill="#fb9a78"
          d="M132.6,133.9l2.7,1.2c0.8,0.4,0.4,1.5-0.5,1.4l-2.4-0.5c-0.7-0.1-1.1-0.7-1-1.4l0-0.1    C131.5,134,132.1,133.6,132.6,133.9z"
          class="colorfb9a78 svgShape"></path>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M132.6,133.9l2.7,1.2c0.8,0.4,0.4,1.5-0.5,1.4l-2.4-0.5" class="colorStroke000 svgStroke"></path>
        <g fill="#000000" class="color000 svgShape">
          <path fill="#fb9a78"
            d="M137.4,138.7l-2.4-2.9l-2.8-1.2c-0.5-0.2-0.3-0.9,0.2-0.9l2.4-0.1c0.4,0,0.7,0.1,1.1,0.2     l1.5,0.8c0.4,0.2,0.7,0.5,1,0.9l1.1,1.7"
            class="colorfb9a78 svgShape"></path>
          <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
            d="M137.4,138.7l-2.4-2.9l-2.8-1.2c-0.5-0.2-0.3-0.9,0.2-0.9l2.4-0.1" class="colorStroke000 svgStroke"></path>
        </g>
      </g>
      <g fill="#000000" class="color000 svgShape">
        <ellipse cx="236.8" cy="83.9" fill="#007ffa" rx="13.5" ry="11.2" class="color007ffa svgShape"></ellipse>
        <path fill="#ffba00"
          d="M242.5 90.2c-.5 0-.9-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5.5 0 .9.2 1.2.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1C243.4 90.1 243 90.2 242.5 90.2zM244.1 77.8l-.3 8.2h-2.4l-.3-8.2H244.1zM236.8 90.2c-.5 0-.9-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5.5 0 .9.2 1.2.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1C237.7 90.1 237.3 90.2 236.8 90.2zM238.4 77.8l-.3 8.2h-2.4l-.3-8.2H238.4zM231.2 90.2c-.5 0-.9-.1-1.2-.4-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5.5 0 .9.2 1.2.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1C232.1 90.1 231.7 90.2 231.2 90.2zM232.8 77.8l-.3 8.2H230l-.3-8.2H232.8z"
          class="colorffba00 svgShape"></path>
        <polygon fill="#007ffa" points="233.8 93.4 228.5 97.3 229.3 91.5" class="color007ffa svgShape"></polygon>
      </g>
      <g fill="#000000" class="color000 svgShape">
        <Link to="/">
          <path fill="#07beb8"
            d="M146.5,188.7c0,0.3-0.3,0.6-0.6,0.6H66.8c-0.3,0-0.6-0.3-0.6-0.6v-18c0-0.3,0.3-0.6,0.6-0.6    h79.2c0.3,0,0.6,0.3,0.6,0.6V188.7z"
            class="color07beb8 svgShape"></path>

        <path fill="#ffffff"
          d="M93.6 177.9c-.2-.3-.5-.7-.9-.9-.4-.2-.8-.3-1.3-.3-.5 0-1 .1-1.4.4-.4.2-.7.6-1 1-.2.4-.4 1-.4 1.5 0 .6.1 1.1.4 1.5.2.4.6.8 1 1 .4.2.9.4 1.4.4.7 0 1.3-.2 1.8-.6.5-.4.7-.8.8-1.7h-3.1v-.9h4.4v.9c0 .6-.3 1.2-.6 1.7-.4.5-.8 1-1.4 1.3-.6.3-1.2.5-1.9.5-.8 0-1.5-.2-2.1-.5-.6-.4-1.1-.8-1.5-1.5-.4-.6-.6-1.3-.6-2.1s.2-1.5.6-2.1c.4-.6.9-1.1 1.5-1.5.6-.4 1.3-.5 2.1-.5.9 0 1.6.2 2.3.6s1.2.9 1.5 1.8H93.6zM98.3 183.2c-.6-.4-1.1-.8-1.5-1.5-.4-.6-.6-1.3-.6-2.1s.2-1.5.6-2.1c.4-.6.9-1.1 1.5-1.5.6-.4 1.3-.5 2.1-.5.8 0 1.5.2 2.1.5.6.4 1.1.8 1.5 1.5s.5 1.3.5 2.1-.2 1.5-.5 2.1-.9 1.1-1.5 1.5c-.6.4-1.3.5-2.1.5C99.7 183.8 99 183.6 98.3 183.2zM101.8 182.3c.4-.2.7-.6 1-1.1s.4-1 .4-1.6-.1-1.1-.4-1.6c-.2-.5-.6-.8-1-1-.4-.2-.9-.4-1.4-.4-.5 0-1 .1-1.4.4-.4.2-.7.6-1 1-.2.5-.4 1-.4 1.6s.1 1.1.4 1.6c.2.5.6.8 1 1.1.4.2.9.4 1.4.4C100.9 182.6 101.4 182.5 101.8 182.3zM114.3 180.2c.3.4.5.8.5 1.3 0 .4-.1.8-.3 1.1-.2.3-.5.6-.9.8-.4.2-.9.3-1.4.3h-3.5v-8.2h3.3c.6 0 1 .1 1.4.3.4.2.7.4.9.8.2.3.3.7.3 1.1 0 .5-.1.9-.4 1.2-.2.3-.6.5-1 .7C113.7 179.6 114 179.8 114.3 180.2zM110.1 179.1h1.7c.4 0 .8-.1 1-.3.2-.2.4-.5.4-.9 0-.4-.1-.6-.4-.8-.2-.2-.6-.3-1-.3h-1.7V179.1zM113.1 182.3c.3-.2.4-.5.4-.9 0-.4-.1-.8-.4-1-.3-.2-.6-.4-1.1-.4h-1.8v2.6h1.9C112.5 182.6 112.8 182.5 113.1 182.3zM121.1 182h-3.4l-.6 1.7h-1.4l2.9-8.2h1.5l2.9 8.2h-1.4L121.1 182zM120.8 180.8l-1.3-3.8-1.3 3.8H120.8zM124.5 177.5c.4-.6.9-1.1 1.5-1.5.6-.4 1.3-.5 2.1-.5.9 0 1.6.2 2.3.6.7.4 1.2.9 1.5 1.8h-1.6c-.2-.3-.5-.7-.9-1-.4-.2-.8-.3-1.3-.3-.5 0-1 .1-1.4.4-.4.2-.7.6-1 1-.2.5-.4 1-.4 1.6s.1 1.1.4 1.6c.2.5.6.8 1 1 .4.2.9.4 1.4.4.5 0 .9-.1 1.3-.3.4-.2.7-.6.9-.9h1.6c-.3.6-.8 1.3-1.5 1.8-.7.4-1.4.6-2.3.6-.8 0-1.5-.2-2.1-.5-.6-.4-1.1-.9-1.5-1.5-.4-.6-.6-1.3-.6-2.1C123.9 178.8 124.1 178.1 124.5 177.5zM137.9 183.7l-3.3-3.7v3.7h-1.2v-8.2h1.2v3.7l3.3-3.7h1.7l-3.5 4.1 3.6 4.1H137.9z"
          class="colorfff svgShape"></path>
        <path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".291"
          d="M79.6,182.7l-2.2-2.2c-0.5-0.5-0.5-1.4,0-1.9l2.2-2.2" class="colorStrokefff svgStroke"></path>
        <circle cx="78.5" cy="179.6" r="4.9" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10"
          stroke-width=".291" class="colorStrokefff svgStroke"></circle></Link>
      </g>
    </svg>
    </div>
  );
};

export default NotFound;
