import React from "react"

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { dataToken } = pluginOptions

  setHeadComponents([
    <script
      src="https://cdn.seline.com/seline.js"
      data-token={dataToken}
      async
    />
  ])
}
