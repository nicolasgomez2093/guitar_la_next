import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

function Nosotros() {
  return (
    <div>
      <Layout pagina="Nosotros">
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="imagen sobre nosotros" />

            <div >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elementum lectus non diam facilisis iaculis. Duis tincidunt nunc
                ac scelerisque mattis. In viverra bibendum augue, vitae eleifend
                nunc maximus eu. Sed vitae eros sollicitudin, efficitur tortor
                quis, malesuada nulla. Vivamus vitae eros vel massa ultricies
                hendrerit vel sed dolor. In egestas congue fermentum. Aenean
                venenatis aliquam tortor ut blandit.</p> 
                <p>Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Integer viverra
                luctus massa ut suscipit. Sed eleifend est nisi, nec feugiat
                velit tristique eget. Integer accumsan rutrum accumsan. Quisque
                tempor scelerisque convallis. Integer luctus sed tellus id
                maximus. Fusce aliquet nibh id congue rhoncus. Nullam rhoncus
                laoreet fermentum. Donec tortor nisi, imperdiet eget mauris at,
                congue laoreet nunc. Proin varius congue molestie. Nunc sed
                consectetur dui, eu tincidunt eros. Integer ut dolor sem.
                Suspendisse in nunc a ipsum vehicula mollis.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
export default Nosotros;
