export default {
  "id": "1",
  "cells": [{
    "rows": [{
      "cells": [{
        "size": 12,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/slate"},
              "state": {"importFromHtml": "<p>Aufgrund der <a href=\"/1925\">Kongruenzsätze</a> reicht es für die eindeutige Konstruktion eines Dreiecks aus, wenn man nur <strong>3 Eigenschaften</strong> (also <em>Längen der Seite</em> oder <em>Größe der Winkel</em>) des Dreiecks kennt.</p>\n<p>Ein Dreieck ist eindeutig konstruierbar, wenn man</p>\n<ul>\n<li><p>die Längen aller 3 Seiten (SSS-Satz) oder</p></li>\n<li><p>die Länge zweier Seiten und die Größe des von Ihnen eingeschlossenen Winkels (SWS-Satz) oder</p></li>\n<li><p>die Länge einer Seite und die Größe der anliegenden Winkel (WSW-Satz) oder</p></li>\n<li><p>die Längen zweier Seiten und die Größe des der längeren der beiden Seiten gegenüberliegenden Winkels (SsW-Satz)</p></li>\n</ul>\n<p>kennt.</p>"}
            }
          }]
        }]
      }]
    }, {
      "cells": [{
        "size": 12,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/slate"},
              "state": {"importFromHtml": "<h2 id=\"vorgehenbeiderkonstrukion\">Vorgehen bei der Konstrukion</h2>\n<p>Als konkretes Beispiel wird jetzt gewählt: Konstruktion eines Dreiecks mit Seitenlängen <katexinline>a=3\\;cm;\\;\\;\\;b=\\;4\\;cm;\\;\\;c=\\;5\\;cm\\;</katexinline></p>"}
            }
          }]
        }]
      }]
    }, {
      "cells": [{
        "size": 6,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/slate"},
              "state": {"importFromHtml": "<p>Zu allererst fertigt man eine Skizze/Planfigur an. Man zeichnet dazu ein beliebiges Dreieck, bei dem die Winkel und Längen nicht mit den Angaben übereinstimmen müssen, aber die Namen der Seiten und Winkel angegeben werden.</p>"}
            }
          }]
        }]
      }, {
        "size": 6,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/image"},
              "state": {"alt": "legacy geogebra formula", "src": "/assets/pic1.png"}
            }
          }]
        }]
      }]
    }, {
      "cells": [{
        "size": 6,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/slate"},
              "state": {"importFromHtml": "<p>Man markiert nun die bekannten Größen und erkennt, ob die Angaben die Voraussetzungen eines Kongruenzsatzes erfüllen. Jetzt weiß man auch, ob man das Dreieck eindeutig konstruieren kann.</p>\n<p>(in diesem Beispiel: SSS-Satz <katexinline>\\rightarrow</katexinline> eindeutig konstruierbar)</p>"}
            }
          }]
        }]
      }, {
        "size": 6,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/image"},
              "state": {"alt": "legacy geogebra formula", "src": "/assets/pic2.png"}
            }
          }]
        }]
      }]
    }, {
      "cells": [{
        "size": 6,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/slate"},
              "state": {"importFromHtml": "<p>Nun folgt die eigentliche Konstruktion. Es gibt immer unterschiedliche Herangehensweisen für die Konstruktion.</p>"}
            }
          }]
        }]
      }, {
        "size": 6,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/slate"},
              "state": {"importFromHtml": "<ul>\n<li><p>Beginne immer mit einer Seite und konstruiere dann die weiteren gegebenen Winkel oder Seiten.</p></li>\n<li><p>Seitenlängen werden immer mit dem Zirkel eingetragen</p></li>\n<li><p>Winkel müssen je nach Angabe konstruiert werden oder dürfen mit dem Geodreieck gezeichnet werden</p></li>\n</ul>"}
            }
          }]
        }]
      }]
    }, {
      "cells": [{
        "size": 12,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/slate"},
              "state": {"importFromHtml": "<h2 id=\"diedreiecksungleichungen\">Die Dreiecksungleichungen</h2>\n<p>Für jedes Dreieck gilt:</p>\n<p>Die Länge einer Dreiecksseite muss immer kleiner sein als die Summe der Längen der anderen beiden Seiten.</p>\n<p>Formal aufgeschrieben:</p>\n<ul>\n<li><katexinline>a &lt; b + c</katexinline></li>\n<li><katexinline>b &lt; a + c</katexinline></li>\n<li><katexinline>c &lt; a + b</katexinline></li>\n</ul>\n<p>Diese Ungleichungen sind besonders wichtig, wenn man drei Seitenlängen gegeben hat.Erfüllen die Angaben die Dreiecksungleichungen nicht, dann gibt es kein solches Dreieck.Es reicht aus, wenn man überprüft, ob die größte Seite kleiner als die Summe der anderen beiden Seiten ist. Damit sind die anderen beiden Ungleichungen automatisch auch erfüllt.</p>"}
            }
          }]
        }]
      }]
    }, {
      "cells": [{
        "size": 12,
        "rows": [{
          "cells": [{
            "content": {
              "plugin": {"name": "ory/editor/core/content/slate"},
              "state": {"importFromHtml": "<h2 id=\"konstruktionsbeispiele\">Konstruktionsbeispiele</h2>\n<p>Konstruiere ein Dreieck mit den Seitenlängen <katexinline>a=3\\;cm;\\;\\;\\;b=\\;4\\;cm;\\;\\;c=\\;5\\;cm\\;</katexinline></p>\n<ol>\n<li><p>Zeichne eine Gerade und wähle darauf den Punkt A des Dreiecks aus.</p></li>\n<li><p>Zeichne einen Kreis um A, dessen Radius genauso groß ist wie die Seite c.</p></li>\n<li><p>Der Schnittpunkt der Geraden und des Kreises ist der Eckpunkt B.</p></li>\n<li><p>Zeichne einen Kreis um B, dessen Radius so groß ist wie die Seite a.</p></li>\n<li><p>Zeichne einen Kreis um A, dessen Radius so groß ist wie die Seite b.</p></li>\n<li><p>Der Schnittpunkt der beiden Kreise ist der Punkt C des Dreiecks.</p></li>\n</ol>"}
            }
          }]
        }, {
          "cells": [{
            "content": {
              "plugin": {"name": "serlo/content/geogebra"},
              "state": {"alt": "Dreiecke konstruieren", "src": "1571395"}
            }
          }]
        }]
      }]
    }, {
      "cells": [{
        "size": 12,
        "rows": [{
          "cells": [{
            "layout": {
              "plugin": {"name": "serlo/layout/spoiler"},
              "state": {"title": "Weitere Beispielaufgaben"}
            },
            "rows": [{
              "cells": [{
                "content": {
                  "plugin": {"name": "serlo/content/injection"},
                  "state": {"alt": "Übungsaufgabe1", "src": "/1"}
                }
              }]
            }, {
              "cells": [{
                "content": {
                  "plugin": {"name": "serlo/content/injection"},
                  "state": {"alt": "Übungsaufgabe2", "src": "/2"}
                }
              }]
            }]
          }]
        }]
      }]
    }]
  }]
}