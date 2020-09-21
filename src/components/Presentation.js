import React, { Component } from "react";

export default class Presentation extends Component {
  render() {
    const { flag, avatar, name, profile, description, theme } = this.props;
    const profileTextColor =
      theme === "Dark" ? "text-purple-500" : "text-orange-900";

    return (
      <div>
        <div class="md:flex p-6">
          <div className="flex justify-center md:justify-end md:w-1/2 md:mx-20">
            <img
              class="w-32 md:w-64 rounded-full mx-auto md:mx-0 items-center"
              src={avatar}
              alt="avatar"
            />
          </div>
          <div class="md:w-1/2 md:flex md:flex-col md:justify-center md:items-start">
            <div className="flex flex-row justify-center align-middle pb-3">
              <img src={flag} className="presentation-flag" alt="flag" />
              <h2 class="text-3xl pl-3">{name}</h2>
            </div>
            <div class={`text-lg ${profileTextColor}`}>{profile}</div>
            <h3 className="text-sm font-hairline md:text-lg md:w-3/4">
              {description}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
