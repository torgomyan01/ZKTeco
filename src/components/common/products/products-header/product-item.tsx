import { RandomKey } from "@utils/helpers";
import Image from "next/image";

interface IThisProps {
  title: string;
  image: string;
}

function ProductItem({ title, image }: IThisProps) {
  return (
    <div key={RandomKey()} className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="products-item">
        <div className="products-item-image">
          <Image
            src={`/images/products/${image}`}
            alt="product1"
            width={226}
            height={217}
          />
          <div className="products-item-image-type">
            <Image
              src="/images/comma-green.svg"
              alt="comma-green.svg"
              width={52}
              height={52}
            />
            <div>
              <p className="products-item-image-type-sub">Selected filter</p>
              <h5 className="products-item-image-type-name">Fingerprint</h5>
            </div>
          </div>
        </div>
        <div className="products-item-info">
          <h3 className="products-item-title">{title}</h3>
          <h3 className="products-item-type">Ultima siries 2</h3>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="products-item-function">AVID.1</div>
            <div className="products-item-price">$4,850.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
