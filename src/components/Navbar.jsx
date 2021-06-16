import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" col-span-1">
      <nav className=" inset-x md:flex flex-col md:fixed 2xl:left-44 xl:left-28 md:left-16 mt-10 items-end ">
        <div className="hidden md:block">
          <img
            src="https://ik.imagekit.io/harshit/Logo_fMEp4D07jbZ.svg"
            alt="logo"
          />
        </div>
        <ul class="bg-white rounded-md flex gap-20 p-4 px-6 shadow-lg fixed left-1/2 -translate-x-1/2	transform -bottom-10 flex md:static md:transform-none md:flex-col flex my-20 font-secondary md:gap-8 font-bold text-gray-900 text-2xl ">
          <li className="order-start">
            {" "}
            <NavLink exact="true" className="flex items-center gap-4 " to="/">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33398 16.6667V31.6667C8.33398 32.5872 9.08018 33.3334 10.0007 33.3334H30.0007C30.9212 33.3334 31.6673 32.5872 31.6673 31.6667V16.6667"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M35 18.3334L20.5117 7.0647C20.2107 6.83065 19.7893 6.83065 19.4883 7.0647L5 18.3334"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>{" "}
              <h1 className="hidden md:block">Home</h1>
            </NavLink>
          </li>
          <li className=" md:order-last">
            {" "}
            <NavLink
              className="flex items-center gap-4 order-last	"
              exact="true"
              to="/new"
            >
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4577 36.6666C29.6624 36.6666 37.1244 29.2047 37.1244 19.9999C37.1244 10.7952 29.6624 3.33325 20.4577 3.33325C11.2529 3.33325 3.79102 10.7952 3.79102 19.9999C3.79102 29.2047 11.2529 36.6666 20.4577 36.6666Z"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.458 13.3334V26.6667"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.791 20H27.1244"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="hidden md:block">Add Post</h1>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              exact="true"
              className="flex items-center gap-4"
              to="/profile"
            >
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.7917 35V31.6667C33.7917 29.8986 33.0893 28.2029 31.839 26.9526C30.5888 25.7024 28.8931 25 27.125 25H13.7917C12.0236 25 10.3279 25.7024 9.07762 26.9526C7.82738 28.2029 7.125 29.8986 7.125 31.6667V35"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.4577 18.3333C24.1396 18.3333 27.1244 15.3486 27.1244 11.6667C27.1244 7.98477 24.1396 5 20.4577 5C16.7758 5 13.791 7.98477 13.791 11.6667C13.791 15.3486 16.7758 18.3333 20.4577 18.3333Z"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="hidden md:block"> Profile</h1>
            </NavLink>
          </li>

          <li className="hidden md:block">
            {" "}
            <NavLink
              className="flex items-center gap-4"
              exact="true"
              to="/notification"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.7052 28.3333H30.2935C31.972 28.3333 33.3327 26.9727 33.3327 25.2942C33.3327 24.1845 32.7278 23.163 31.7548 22.6293L30.573 21.9812C30.2113 21.7828 29.9622 21.4278 29.8988 21.0203L28.5453 12.3194C27.89 8.10673 24.2627 5 19.9993 5C15.736 5 12.1087 8.10673 11.4534 12.3194L10.0999 21.0203C10.0365 21.4278 9.78743 21.7828 9.42577 21.9812L8.24387 22.6293C7.27085 23.163 6.66602 24.1845 6.66602 25.2942C6.66602 26.9727 8.0267 28.3333 9.7052 28.3333Z"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M23.3327 35C22.5138 36.0228 21.3238 36.6667 19.9993 36.6667C18.6748 36.6667 17.4848 36.0228 16.666 35"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <h1 className=" "> Notifications</h1>
            </NavLink>
          </li>

          <li className="hidden md:block">
            {" "}
            <NavLink
              className="flex items-center gap-4"
              exact="true"
              to="/settings"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7823 5.6046C17.8592 2.57614 22.1422 2.57614 23.219 5.60459C23.8973 7.51175 26.0758 8.41412 27.904 7.54514C30.8068 6.16522 33.8353 9.19367 32.4555 12.0966C31.5865 13.9248 32.4888 16.1033 34.396 16.7816C37.4245 17.8584 37.4245 22.1414 34.396 23.2183C32.4888 23.8966 31.5865 26.0751 32.4555 27.9033C33.8353 30.8061 30.8068 33.8346 27.904 32.4548C26.0758 31.5858 23.8973 32.4881 23.219 34.3953C22.1422 37.4238 17.8592 37.4238 16.7823 34.3953C16.104 32.4881 13.9255 31.5858 12.0974 32.4548C9.1944 33.8346 6.16595 30.8061 7.54587 27.9033C8.41485 26.0751 7.51249 23.8966 5.60532 23.2183C2.57687 22.1414 2.57687 17.8584 5.60534 16.7816C7.51249 16.1033 8.41485 13.9248 7.54587 12.0966C6.16595 9.19367 9.1944 6.16522 12.0974 7.54514C13.9255 8.41412 16.104 7.51175 16.7823 5.6046Z"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <h1 className=" "> Settings</h1>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
