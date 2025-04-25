"use client";
import { ChevronDown } from "@deemlol/next-icons";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SideBar() {
  const [isActive, setIsActive] = useState(null);
  const items = ["1", "2", "3", "4", "5", "6"];

  const [introductionIsActive, setIntroductionIsActive] = useState(null);
  const IntroductionItems = ["1", "2", "3"];

  const [supervisedIsActive, setSupervisedIsActive] = useState(null);
  const supervisedItems = ["1", "2", "3", "4", "5", "6", "7"];

  const [unsupervisedIsActive, setUnsupervisedIsActive] = useState(null);
  const unsupervisedItems = ["1", "2", "3"];

  const [reinforcementIsActive, setreinforcementIsActive] = useState(null);
  const reinforcementItems = ["1", "2"];
  return (
    <div className="side-bar">
      <div
        onClick={() => setIsActive((prev) => "1")}
        className={
          isActive == items[0]
            ? "side-bar-item active-sidebar-item"
            : "side-bar-item"
        }
      >
        <Link href="/introduction">مقدمه ای بر یادگیری ماشین </Link>
        <ChevronDown
          className={
            isActive == items[0]
              ? "active-sidebar-item-icon"
              : "sidebar-item-icon"
          }
          size={20}
        />
      </div>

      <ul
        className={
          isActive == items[0]
            ? "introduction-sidebar"
            : "introduction-sidebar-hidden"
        }
      >
        <li
          onClick={() => setIntroductionIsActive("1")}
          className={
            introductionIsActive == IntroductionItems[0]
              ? "active-introduction-sidebar-item"
              : "introduction-sidebar-item"
          }
        >
          <Link href="/introduction/mlworkflow">ML Workflow</Link>
        </li>
        <li
          onClick={() => setIntroductionIsActive("2")}
          className={
            introductionIsActive == IntroductionItems[1]
              ? "active-introduction-sidebar-item"
              : "introduction-sidebar-item"
          }
        >
          <Link href="/introduction/datacleaning">Data Cleaning</Link>
        </li>
        <li
          onClick={() => setIntroductionIsActive("3")}
          className={
            introductionIsActive == IntroductionItems[2]
              ? "active-introduction-sidebar-item"
              : "introduction-sidebar-item"
          }
        >
          <Link href="/introduction/featurescaling">Feature Scaling</Link>
        </li>
      </ul>

      <div
        onClick={() => setIsActive("2")}
        className={
          isActive == items[1]
            ? "side-bar-item active-sidebar-item"
            : "side-bar-item"
        }
      >
        <Link href="/supervised">یادگیری تحت نظارت</Link>
        <ChevronDown
          className={
            isActive == items[1]
              ? "active-sidebar-item-icon"
              : "sidebar-item-icon"
          }
          size={20}
        />
      </div>

      <ul
        className={
          isActive == items[1]
            ? "supervised-sidebar"
            : "supervised-sidebar-hidden"
        }
      >
        <li
          onClick={() => setSupervisedIsActive("1")}
          className={
            supervisedIsActive == supervisedItems[0]
              ? "active-supervised-sidebar-item"
              : "supervised-sidebar-item"
          }
        >
          <Link href="/supervised/linearreg">Linear Regression</Link>
        </li>
        <li
          onClick={() => setSupervisedIsActive("2")}
          className={
            supervisedIsActive == supervisedItems[1]
              ? "active-supervised-sidebar-item"
              : "supervised-sidebar-item"
          }
        >
          <Link href="/supervised/logisticreg">Logistic Regression</Link>
        </li>
        <li
          onClick={() => setSupervisedIsActive("3")}
          className={
            supervisedIsActive == supervisedItems[2]
              ? "active-supervised-sidebar-item"
              : "supervised-sidebar-item"
          }
        >
          <Link href="/supervised/decisiontree">Decision Trees</Link>
        </li>
        <li
          onClick={() => setSupervisedIsActive("4")}
          className={
            supervisedIsActive == supervisedItems[3]
              ? "active-supervised-sidebar-item"
              : "supervised-sidebar-item"
          }
        >
          <Link href="/supervised/svm">SVM</Link>
        </li>
        <li
          onClick={() => setSupervisedIsActive("5")}
          className={
            supervisedIsActive == supervisedItems[4]
              ? "active-supervised-sidebar-item"
              : "supervised-sidebar-item"
          }
        >
          <Link href="/supervised/knn">k-NN</Link>
        </li>
        <li
          onClick={() => setSupervisedIsActive("6")}
          className={
            supervisedIsActive == supervisedItems[5]
              ? "active-supervised-sidebar-item"
              : "supervised-sidebar-item"
          }
        >
          <Link href="/supervised/naivebayes">Naïve Bayes</Link>
        </li>
        <li
          onClick={() => setSupervisedIsActive("7")}
          className={
            supervisedIsActive == supervisedItems[6]
              ? "active-supervised-sidebar-item"
              : "supervised-sidebar-item"
          }
        >
          <Link href="/supervised/randomforest">Random Forest</Link>
        </li>
      </ul>

      <div
        onClick={() => setIsActive("3")}
        className={
          isActive == items[2]
            ? "side-bar-item active-sidebar-item"
            : "side-bar-item"
        }
      >
        <Link href="/unsupervised">یادگیری بدون نظارت</Link>
        <ChevronDown
          className={
            isActive == items[2]
              ? "active-sidebar-item-icon"
              : "sidebar-item-icon"
          }
          size={20}
        />
      </div>

      <ul
        className={
          isActive == items[2]
            ? "unsupervised-sidebar"
            : "unsupervised-sidebar-hidden"
        }
      >
        <li
          onClick={() => setUnsupervisedIsActive("1")}
          className={
            unsupervisedIsActive == unsupervisedItems[0]
              ? "active-unsupervised-sidebar-item"
              : "unsupervised-sidebar-item"
          }
        >
          <Link href="/unsupervised/clusternig">Clustering</Link>
        </li>
        <li
          onClick={() => setUnsupervisedIsActive("2")}
          className={
            unsupervisedIsActive == unsupervisedItems[1]
              ? "active-unsupervised-sidebar-item"
              : "unsupervised-sidebar-item"
          }
        >
          <Link href="/unsupervised/reduction">Dimensionality Reduction</Link>
        </li>
        <li
          onClick={() => setUnsupervisedIsActive("3")}
          className={
            unsupervisedIsActive == unsupervisedItems[2]
              ? "active-unsupervised-sidebar-item"
              : "unsupervised-sidebar-item"
          }
        >
          <Link href="/unsupervised/association">Association Rule</Link>
        </li>
      </ul>

      <div
        onClick={() => setIsActive("4")}
        className={
          isActive == items[3]
            ? "side-bar-item active-sidebar-item"
            : "side-bar-item"
        }
      >
        <Link href="/reinforcement">یادگیری تقویتی</Link>
        <ChevronDown
          className={
            isActive == items[3]
              ? "active-sidebar-item-icon"
              : "sidebar-item-icon"
          }
          size={20}
        />
      </div>

      <ul
        className={
          isActive == items[3]
            ? "reinforcement-sidebar"
            : "reinforcement-sidebar-hidden"
        }
      >
        <li
          onClick={() => setreinforcementIsActive("1")}
          className={
            reinforcementIsActive == reinforcementItems[0]
              ? "active-reinforcement-sidebar-item"
              : "reinforcement-sidebar-item"
          }
        >
          <Link href="/reinforcement/modelbased">Model-Based Methods</Link>
        </li>
        <li
          onClick={() => setreinforcementIsActive("2")}
          className={
            reinforcementIsActive == reinforcementItems[1]
              ? "active-reinforcement-sidebar-item"
              : "reinforcement-sidebar-item"
          }
        >
          <Link href="/reinforcement/modelfree">Model-Free Methods</Link>
        </li>
      </ul>

      <div
        onClick={() => setIsActive("5")}
        className={
          isActive == items[4]
            ? "side-bar-item active-sidebar-item"
            : "side-bar-item"
        }
      >
        <Link href="/deployment">استقرار مدل های ML</Link>
      </div>

      <div
        onClick={() => setIsActive("6")}
        className={
          isActive == items[5]
            ? "side-bar-item active-sidebar-item"
            : "side-bar-item"
        }
      >
        <Link href="/role">نقش ML در هوش مصنوعی</Link>
      </div>
    </div>
  );
}
