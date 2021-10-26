import classNames from "classnames";
import Head from "next/head";
import react from "react";
import FooterSection from "../../components/home/footer_section/footer_section";
import NavBar from "../../components/nav_bar/nav_bar";
import styles from "../../styles/checkout/success.module.scss";
import Check from "@mui/icons-material/Check";
import router from "next/router";

export default class OrderSuccessPage extends react.Component {
  public render = () => {
    return (
      <>
        <Head>
          <title>Order Success</title>
        </Head>

        <div className={classNames(styles.order_success_page)}>
          <NavBar />

          <section className={classNames(styles.main_section)}>
            <div className={classNames(styles.order_success_area)}>
              <Check className={classNames(styles.check)} />

              <h1 className={classNames(styles.heading) }>Order Success!</h1>
            </div>

            {this.buildToHomePageButton()}
          </section>
          
          <FooterSection />
        </div>
      </>
    );
  };

  private buildToHomePageButton = () => {
    function onClickCallback(): void {
      router.push("/");
    }

    return <button className={classNames(styles.to_home_page_button)} onClick={onClickCallback}>To Home Page</button>;
  };
}