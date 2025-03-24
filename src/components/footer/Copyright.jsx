import React from "react";

function Copyright() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Corpus
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Copyright;
