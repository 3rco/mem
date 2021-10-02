import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AppContainer from "../Components/AppContainer";
import { useState } from "react";
export default function MainScreen() {
  const [mainScreen, setMainScreen] = useState("home");
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fcf5c7",
          borderRadius: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Navbar />
        {mainScreen === "home" && (
          <>
            <AppContainer
              header={"Web Sites"}
              icon={"asd"}
              name={"asd"}
              url={[
                "https://urcode.link/_next/image?url=%2Fimg%2Flogo.png&w=64&q=75",
              ]}
            />
            <AppContainer
              header={"Mobile Apps"}
              url={[
                "https://play-lh.googleusercontent.com/oPJ_iUQ2YbDbafSFxtsyzFSbXEZwQOXv65nBadzKH5REDK2YA12Kraer8mM3HB1VCg4=s180-rw",
              ]}
            />
            <AppContainer
              header={"Projects"}
              url={[
                "https://play-lh.googleusercontent.com/oPJ_iUQ2YbDbafSFxtsyzFSbXEZwQOXv65nBadzKH5REDK2YA12Kraer8mM3HB1VCg4=s180-rw",
              ]}
            />
            <AppContainer
              header={"Social Networks"}
              url={[
                "https://www.macobserver.com/wp-content/uploads/2019/05/workfeatured-GitHub-2.png",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///9KdKBLdqFIb55Kc6BHbp1Md6JJcZ9NeaNGbJxKdaBKcqBJcJ9LdaFJcp9IcJ6/y9vL1uLW3ug6ZZjF0N7m7PFbgqmWqsSouMw9bpw8apu0wtU+cJ3y9fg9aJs2Z5nf5u2KpL95lbZpiq+vvtIyX5R8mrmdsMhbf6hvjbGMp8Jph654lrZWeqaFnrujs8pN4LGuAAAKb0lEQVR4nO3da3OiMBQGYFGQIgoVRCUVpFqt9ub//3eL7bprIck5J6CQGd5v7XScPgZyh/R6Xbp06dKlS5cuXbp06dLlLknyZEH9yc4f3LAtCp5e99uHh1Ucr34nvqT4Mz4sz2Qy/1g8BVEjumT6th2uVqP+8GH4UMzwb0q/KKUvyuQc0zCN/Nvx5s+zOyuj5Xy16g/LtHqBeUbnGDmTDU93QyaPH6uRwHYT4A/SiNn26R73ZbR4WInK7qbAPF7sPWe39j0b0uK7KfCcON7c0hjt4z7guzEwj7++nXFpgL7bA89G9nqT+3E6X4G+uwDP1+phVj9wD9Qv9wSe65xjzcUYzKEK5q7A86VqBnUCXwxEAd4VaJg2O9UH3CPuwHsDTdNlx5p8yRZzhd4dmMc61NKRi+ZwG9EM0DT9YVYDkDN0aAswJ9qV65tIOIBoA9DM65uKxHaX4DfRz6oAk3nbged7sUp1s21vJXNF/FQH7tvaTPyOtVUFvrSyoeeEvaoBA0MTYE6cqgBxtUwrgK7tq4w0UDdhO4Cua73TgVPMTdgWoOuyR7IQc422B+iOJ9TrdNmeKQsMMC/EBQ0Y6QZ0vTWtg7pvx6waAej5pMomi7UDerRC/Gp+4pcM9HxC5y0CezMtBHoeYaj41uzahCLQs/ZYYKJlCXr2mGFHik9AU9FSoI2fQf1oan2wItAeHHBAoLVvL9C2kQ3Gsokl7FqANntGCbUtQTuvaypfpELg5GfLzGrUJDC/TDOEcCYRCoATL94uZ0EWzJZb5k2aA9rsCSF8E/fYBEDDuFp1Tl4NozGg7WwQQvHQVwBcbX83tNHcawpo+5/wQFi8UCEClvtKRxHx1sD8Ms1AYSC6DQXAEadHn8yNhoB2Cs/XiLpsolqU+6VN44aANmJyeMFv70VAg9/GfnAK8R7AsfMFCvnzF8J2UDAme1w1Axw78FwGtyoVAvsHft2VsGaA44EJVabcsaEQODRE7c9q0ghwPE5BIec2FAOHhuiy3xrNAMchNApOyrNsEqCooikK7wcchxkgjEpCGXBofAg+ZzhqBjgGh4ilBl8KHE7mgs9hDQH9NbRrsbjkJAcOh3HG/5i4IaAPLkIVhBBwuOJP/jwbDQGpQhCYFyKvds7iSUNAohABHBq8adiN1xSQJsQA80IsX6fPcWNAkhAHzIlvhc/4WDUHpAixwJw4v97s8XhoEuiDA8R/Qjyw3zfi7WsQJb0omy7msdEkcBBihRRg/2zMYQ+GF68aayZ+gGghEfgDGv0aTzQDxAoVgMU0BEQKNQbihDoDUUKtgRjh/YG+xdj6HMYsvyKQIMQCR8XHuM8PbvtXQIP3oLZ3AboDtt6eZt+PpmfB42m7Zr5XAYgQxkTgw7KY0+m0MP8D9+dfFLLcej9Ay98UN79Ov1xmKwPRQvQlanAH+ZFhXi7RmLvetYjPQJ898+aNktPYUgVihfh7UCA0zcstGL+IhCbbiuZUoq/UVgMihYRKRiQ0QKEpXXSfsYESECek1KKiq/QiNERCly2l/0jyaakAUUJSMwEIDZHQAoD5Zxx8BSBGSGsH5UJDKFzDW3oj26cDKUIUUC48twgxt6zeMNtdgzUdSBDigFKhIRGi9tgtUzIQL0QCZUJDIkRuIny3qEC0EAuUCA2ZEJlgTQVihWigWGjUIewdHSIQKcQDxb22eoRTRgTihASgSOjVJOyZPg1IGgFjgDcXnhgNOIDnS2MSsLIwyabnmVZhspAGxI8PkcBqwuTlyPKB/drdiJc1bZ8EtNSFfGAl4WzCvictXNtab0Tl+GWRgOpCAbBvcDePo4Sva+//nIwl2gfzxEhAZaEI2DeVy/DEfk06WYJ99kFIAqoKhcCJqVqGU1aYVWPcQUgvYQMKUFEoBqoLTbs4bSh4CvTTogDVhBKgsvAUl+ZFGb9CfXcoQCWhDKgsnHilid+Yv4Ns41CAKkIpcKJY0wSsPLPt8/c5PjsUoIJQDlQtw0dWnrq3uRtXvoV4IF0IAFXL8IVx1ib4W9IWjAIkCyHgRLFPc7I4axMpt6pZMAqQKgSBI0XhwuIsvvA3ivwTooBEIQwEhSYkvJrZ5j/ScxHigDQhAggJTUh4PXWfyoRIIEmIAQJCExL+WpuQCbFAihAFlAtNSPh78UUiRAMJQhxQKjQhYWF1SSzEA/FCJFAmNCFhcflMKCQA0UIsUCI0IWFpfVAkpACxQjRw5ImEJiQsL4BShTwgUogHGiKhCwk5K7xEIReIExKAIqGNFdrKQj4QJaQAqwptZaEAiBGSgLCQP/3yV2grC0XAKkL+Vq5Kwt9AYb+UAnTUhYK9alWEBSChDMVAdaFoM14FYRGIF0qAykLhbkN1YQk4xgplQFWhEKguLAOxQilQUSgGKgtZGYgUyoFqQgmwNuEYKwSASkIZsC7hGCuEgCpCKbAm4RgrBIEKQjmwHuEYK4SB9D4NAKxFOMYKEUCyEALWIfy3AAr12jBAqhAEgkLBwueV8P8KLyBEAYlCGAgJXVf0b5eBgBAHpAkRQEDogsLrNXqpEAkkCTFAudAFhb82IciEWCBFiAJKhS4o/L3LQiJEAwlCHFAmdEFhYRuJWIgH4lt8JFAidEFhcZ+MUEgAooVYoFjogsLSRiBRi08BYoVooGErC8s7nahCHhApxANNm79TwR5f1gdFC7ucrVwCYUoB4oQEoOkdprNynv4BPWvB+YPpzyaZwjYS9sb5qPxPKUCUkALMiYyXqxVeK/8xLYYHzIkhJzQgRkgD8sLZhMAZ0ZN2OqGBCCHTGwgLA6Y30Amh90RFTG+gE0KH6iRMb6Czg95mlsR6A51dBgn/P4WtJdDZgW8VPJhaAx0HfJHwxtAbCL9a/22lNTCFX3f9EusMdFL4zfrTWGegE/Kf2rhOttIZ6ISI8x8OOgMdG3E42ddKYyDiVdC93mOsMTDEnDQTMX2BqNuw19MY6KQY4M/7fzQFwu+cPyfjXqY6AJ0d8sTVuacp0HFwwLzjpikwxB2GdH5ruakl0AHfx/4v+5WWwPSIBfayWEcgPM12laOnIdBx8cBesNYQuCMU4XUhagNMkUcDXgqR6QZEt/aX/O266QMkVKQ/SYZ6AZ00Iwp7j0wrIGpgWMjW1wiYftKBvcT3tAHCqxXcXN6vogEQMYfIzYJHbCUQfZhzMZxbsY1ApZvwJ8mkSGwj0AGP6ZIkmtgaAPFHqnOSWV7rgcTeWjFT5rUbSBtRcImx3Wog5gBgIIHptxcI7g9CJfquUdsITAVnhJKTzFkrgSHieGNsFlVOK7gVcCd8m6RKZtagZcB0p9gXFSU6MNXTCm4CDD8rdGQEeXF577JoBpiG8NHNCkm+1n4rgOnumN0CmCc4rFVe5l8zcHeo2E+TZrplpefM7wpMQ7dyNw0yblI2aAoYhsdb+87JXj/XVgPANHQW2R183wm+vk+fuiMwDMN9LX1QAvLlaDKWOtbgxsA0DXfO+6mmHigtSfC02Ly7+de7/vsgScp7JCSP6PdQdrv08/j1EtTfupOcSRQEjzfJLIiSOvueXbp06dKlS5cuXbp06dJFmD+AQZKbZk38AQAAAABJRU5ErkJggg==",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAApVBMVEX////y8vLxQzbTLir7+/vxPjDy+PjbY2DSJyPzb2fxOizSIh3gi4nxlI7y9PTy+/v7mJLxMB7xLx3xNCPxPC7xKxfqj43y7e3y4uHxTEDyv7zxUUby3dzyxsPxVkvpPjPy1NL709H3paDxY1r7wLz5iYLxiILxjojxfnfxW1HdNS7yt7TxdW3xnJfxamHxe3TxqKTyw8Dlf3zSGBHRAwDqnp3YNzNh/UNpAAAFb0lEQVR4nO2ca2OaShCGFYUk5GQpClWTGKMxl+bWtE3P//9pB4weVNidZbwsLO/zuUk3jzvwMszaagEAAAAAAAAAAAAAAAAAAIDKM519S7ludY3Tul4sZTY17YRkPAr9BfFHINpGEcFH/LWWcDQ27UXNLHadJf2zgWfSmjc466/W4sYz02ZUzGMnI3KngTlrwdSJ1hYTz027kdNdX2hC780zVKjCe+ttrsXtmrYjZd7fXKrTvxsaKVRveJdbSnW32/3WbksK1b88/p1BBJd+fiX3pu1IOXO3F5sU6oM4sjchHnr5dbhnpu1IKdLm+FfXRy1U7/rKL1hG3bQld/8jRjgRvPSKV1E3bY4Tvh4rwnntn2HxGmqozfGd26NEuOB2VFSgddXmuOERIlwS1kL5CuqoLclN74eOcN7gfTus1V9bEuF+HfLOIIJxlAtrFmhLngsfD1eowruIlf95hbWdqLUlEe5QheoNbxQFutB2YtqOlJPTCbH2/sshCjUJa33iE5ucVllb51m9eid8au99w4n2kySsZdY61dZGevNH+45wirC24rlTdW2dDlWo4WyfdwYRfMjD2mqrdWqgjdxw+2yXr7e+5VutFto6HeIPiaLxngo1GLuqsJayXFIdtFGF6sQX+yhUMqwtC7Q22uhC/bF7hPOGP/QKtD7a6DvDrhEuCWu+zr2gZtrIQg2fdmmXC/FAh7V6aEueSSeTyfOqMsgId3XLLlRJ63ud5059tK0+6C95E3UVueEH784gPL2wVjdtq7XfEZcfXrvcG7yqC9T1705rrM1/GxK15DMmHoJbh/ilo+E/53XWdhEUvrRcJy7ZLhfBGxHWeg8iqLk2r/AV+QblJh4K5hQ2cfuXgfDqrk3nD9WfeND4EBY52gJt6TMQEbF0Jx6EeCRKvvf11GaDtvSJm7qI3+hMPHjXROs7cpY9Aju00f0dt09OPNCt76wjZYm2xSAtFeHU7XJPyOYUVubXZk1s0ZZWGNG7Vk88aIS1tR+3R1tyPX+irufSCCe8GfWzG40Bi7TpXJzei5+11HMKTr4NZZM2jcZi5BZMPAiy9Z1retqlLY1wRLGFuYkHjdj3uB37LNNGTrgkO+dmc+fQOzTK71DbtJW9TjGvh/ZpS0zMiAjX+3/igb77xrOimGyhNo3xg1UG88h/KMl6VmprC+lk8pJFu5yeUwh/Sp4s7NSm93w5eC0X1uzXtuhmqOsvGo3Ut1xV18RabRq9MzXKHp292pJC/UV0ahUQHWGLtaURjmiXS6HeP1itLT2AQY0MFUK+7bJbm0YbrQDfId+t2q6NfsOeQ+dNvvXadIZv10mCsMbbQfu1aU0PZb9Rb0qpCdp0ZtWWhPdtrReqjdCWvmynjrGk6E9gNkOb1hxumXnfpmjTmPouM13eGG3UGYPIHZcYkW6QNuXEQ8mTM03Slo7kFt8ZSp/TapQ2WRfcH5UdKW+YtvRsaK4LJ219Q1vmbftrY9we47hM47RtRzj/hnM4q4HaNiYeerxvc2iitmxWpmhOAdoUf/Zi4oH/TTUN1baYA9zhqy2bqi39KtMdToY3V1t7l9OmDda2C9AGbdBWCLSxgDYW0MYC2lhAGwtoYwFtLKCNBbSxgDYW0MYC2lhAGwtoYwFtLKCNBbSxgDYW0MYC2lhAGwtoYwFtLKCNBbSxgDYW0MYC2lhAGwtoYwFtLKCNBbSxgDYW0MYC2ljcb591r5C289+m7UiZbx91r5C2P5em7UjpVnm3dU3bkTOPq6rts7qbLWHri4irou30869pM2rGo9DPCB+NaftznvH579i0F5Lp7FvGvNU1Quvle8bfqWknAAAAAAAAAAAAAAAAAAAAgOY/3QbOPpMgTnMAAAAASUVORK5CYII=",
                "https://i.pinimg.com/736x/02/48/06/024806879205cd4e2e435e648d149c6a.jpg",
              ]}
            />
          </>
        )}
        {mainScreen === "music" && <>music</>}
        {mainScreen === "album" && <>album</>}
        {mainScreen === "blog" && <>blog</>}
        {mainScreen === "games" && <>games</>}
        <Footer setMainScreen={setMainScreen} />
      </div>
    </>
  );
}
