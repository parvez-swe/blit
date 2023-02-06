import React from "react";
import { css } from "@emotion/react";
import { RxMagnifyingGlass } from "react-icons/rx";

const SideBar = () => {
  return (
    <div
      css={css`
        background-color: #bcc6cc;
        height: 100vh;
        position: sticky;
        top: 0;
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          background-color: black;
          justify-items: center;
          cursor: pointer;
        `}
      >
        <input
          type="text"
          placeholder="Search..."
          css={css`
            font-size: 16px;
            border: none;
            flex: 1;
            outline: none;
          `}
        />
        <RxMagnifyingGlass
          css={css`
            width: 30px;
            height: 30px;
            color: white;
          `}
        />
      </div>
      <h1>Category</h1>
      <ul
        css={css`
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          margin-top: 20px;
        `}
      >
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>{" "}
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>{" "}
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>{" "}
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>{" "}
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>{" "}
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>{" "}
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>{" "}
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>{" "}
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>{" "}
        <li
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <p>Bedroom Furniture</p>
          <p>5</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
