import WButton from "@/components/washington/WButton";
import WActionList from "@/components/washington/WActionList";
import WPane from "@/components/washington/WPane";
import WCircularButton from "@/components/washington/WCircularButton";
import { ArrowRight, Plus, Save, Undo2, ChevronRight, ArrowLeft, Check, Trash2, Info, Star } from "lucide-react";
import ModalDemo from "./modal-demo";
import DrawerDemo from "./drawer-demo";

export default function IanKanShowcasePage() {
  return (
    <div className="min-h-screen px-6 py-10 space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">Ian Kan Contributions Showcase</h1>
        <p className="text-muted-foreground max-w-3xl">
          Welcome to the intern showcase for Ian, one of our 2025 interns! This page demonstrates the 6 components that Ian made for the Washington component set and the routing contributions he made to the backend.
          Use the table of contents to jump to any section.
        </p>
        <nav className="flex flex-wrap gap-3 text-sm">
          <a className="underline hover:no-underline" href="#button">Button</a>
          <a className="underline hover:no-underline" href="#action-list">Action List</a>
          <a className="underline hover:no-underline" href="#circular-button">Circular Button</a>
          <a className="underline hover:no-underline" href="#pane">Pane</a>
          <a className="underline hover:no-underline" href="#drawer">Drawer</a>
          <a className="underline hover:no-underline" href="#modal">Modal</a>
          <a className="underline hover:no-underline" href="#backend">Backend JWT</a>
        </nav>
      </header>

      <section id="button" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-medium">WButton</h2>
          <p className="text-muted-foreground max-w-3xl">
            A styled button supporting multiple visual styles, interactive states, sizes, and
            optional left/right icons.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Styles</h3>
          <p className="text-muted-foreground">
            Control via <code>style</code>: <code>primary</code>, <code>subtle</code>,
            <code> danger</code>, <code>outlined</code>.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <WButton content="Primary" style="primary" />
            <WButton content="Subtle" style="subtle" />
            <WButton content="Danger" style="danger" />
            <WButton content="Outlined" style="outlined" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">States</h3>
          <p className="text-muted-foreground">
            Control via <code>state</code>: <code>default</code>, <code>hover</code>,
            <code> disabled</code>, <code>loading</code>.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <WButton content="Default" state="default" style="primary" />
            <WButton content="Hover (preview)" state="hover" style="primary" />
            <WButton content="Disabled" state="disabled" style="primary" disabled />
            <WButton content="Loading" state="loading" style="primary" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Sizes</h3>
          <p className="text-muted-foreground">
            Control via <code>size</code>: <code>sm</code>, <code>md</code>.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <WButton content="Small" size="sm" />
            <WButton content="Medium" size="md" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">With Icons</h3>
          <p className="text-muted-foreground">
            Provide <code>leftIcon</code> and/or <code>rightIcon</code> using Lucide icons.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <WButton content="Add" leftIcon={Plus} />
            <WButton content="Continue" rightIcon={ArrowRight} />
            <WButton content="Proceed" leftIcon={Plus} rightIcon={ArrowRight} />
          </div>
        </div>
      </section>

      <section id="action-list" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-medium">WActionList</h2>
          <p className="text-muted-foreground max-w-3xl">
            A compact horizontal grouping of up to three actions: a primary action, an
            optional secondary action, and an optional tertiary circular action.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Default Trio</h3>
          <p className="text-muted-foreground">Primary, secondary, and a circular tertiary action.</p>
          <div className="flex flex-wrap items-center gap-4">
            <WActionList
              primary={{ content: "Save", leftIcon: Save }}
              secondary={{ content: "Cancel" }}
              tertiary={{ /* X icon built-in */ }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Primary Only</h3>
          <p className="text-muted-foreground">Just the main call-to-action.</p>
          <div className="flex flex-wrap items-center gap-4">
            <WActionList primary={{ content: "Continue", rightIcon: ChevronRight }} />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Primary + Secondary</h3>
          <p className="text-muted-foreground">Two-step decisions with a cancel/back action.</p>
          <div className="flex flex-wrap items-center gap-4">
            <WActionList
              primary={{ content: "Next", rightIcon: ChevronRight }}
              secondary={{ content: "Back", leftIcon: ArrowLeft }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Sizes</h3>
          <p className="text-muted-foreground">Use <code>size</code> to fit dense or spacious layouts.</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Small</span>
              <WActionList
                primary={{ content: "Save", size: "sm" }}
                secondary={{ content: "Cancel", size: "sm" }}
                tertiary={{ size: "sm" }}
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Medium</span>
              <WActionList
                primary={{ content: "Save", size: "md" }}
                secondary={{ content: "Cancel", size: "md" }}
                tertiary={{ size: "md" }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">States</h3>
          <p className="text-muted-foreground">Preview availability and interaction states.</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Default</span>
              <WActionList
                primary={{ content: "Save" }}
                secondary={{ content: "Undo", leftIcon: Undo2 }}
                tertiary={{ state: "default" }}
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Hover</span>
              <WActionList
                primary={{ content: "Save", state: "hover" }}
                secondary={{ content: "Undo", leftIcon: Undo2, state: "hover" }}
                tertiary={{ state: "hover" }}
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Disabled</span>
              <WActionList
                primary={{ content: "Save", state: "disabled" }}
                secondary={{ content: "Undo", leftIcon: Undo2, state: "disabled" }}
                tertiary={{ state: "disabled" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="circular-button" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-medium">WCircularButton</h2>
          <p className="text-muted-foreground max-w-3xl">
            A circular icon-only button supporting multiple styles, sizes, and states.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Styles</h3>
          <p className="text-muted-foreground">
            Control via <code>style</code>: <code>primary</code>, <code>subtle</code>,
            <code> danger</code>, <code>outlined</code>, <code>constructive</code>.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <WCircularButton icon={Check} style="primary" />
            <WCircularButton icon={Info} style="subtle" />
            <WCircularButton icon={Trash2} style="danger" />
            <WCircularButton icon={Info} style="outlined" />
            <WCircularButton icon={Check} style="constructive" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">States</h3>
          <p className="text-muted-foreground">Preview interaction/availability.</p>
          <div className="flex flex-wrap items-center gap-4">
            <WCircularButton icon={Check} state="default" />
            <WCircularButton icon={Check} state="hover" />
            <WCircularButton icon={Check} state="disabled" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Sizes</h3>
          <p className="text-muted-foreground">Control via <code>size</code>: <code>sm</code>, <code>md</code>, <code>lg</code>.</p>
          <div className="flex flex-wrap items-center gap-4">
            <WCircularButton icon={Check} size="sm" />
            <WCircularButton icon={Check} size="md" />
            <WCircularButton icon={Check} size="lg" />
          </div>
        </div>
      </section>

      <section id="pane" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-medium">WPane</h2>
          <p className="text-muted-foreground max-w-3xl">
            A flexible information pane with optional leading visual, title, description,
            inline badge, and an action area on the right.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Default</h3>
          <p className="text-muted-foreground">Standard width with title, description and a subtle action.</p>
          <div className="flex flex-col gap-3">
            <div className="max-w-[520px]">
              <WPane
                title="Upgrade plan"
                description="Unlock premium features including advanced analytics and priority support."
                visualProps={{ icon: Star }}
                badgeProps={{ content: "NEW", style: "warning", size: "sm" }}
                buttonProps={{ content: "Learn more" }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Compact</h3>
          <p className="text-muted-foreground">Content-based width without the right action area.</p>
          <div className="flex flex-wrap items-center gap-4">
            <WPane
              style="compact"
              title="Beta access"
              description="Try the latest experimental features."
              visualProps={{ icon: Info, size: "sm" }}
              badgeProps={{ content: "Beta", style: "secondary", size: "sm" }}
              rightOverride={null}
            />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Right Override</h3>
          <p className="text-muted-foreground">Replace the action with a custom element.</p>
          <div className="flex flex-col gap-3">
            <div className="max-w-[520px]">
              <WPane
                title="Storage"
                description="You have used 76% of your storage."
                visualProps={{ icon: Info }}
                rightOverride={
                  <div className="text-sm text-muted-foreground">76% used</div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section id="drawer" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-medium">Drawer</h2>
          <p className="text-muted-foreground max-w-3xl">
            The drawer is composed using a provider and content primitives. Use the provider to
            open/close a single app-level drawer from anywhere.
          </p>
        </div>

        <DrawerDemo />
      </section>

      <section id="modal" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-medium">WModal</h2>
          <p className="text-muted-foreground max-w-3xl">
            Provider-driven modal composed of header, content, and footer primitives.
          </p>
        </div>

        <ModalDemo />
        <div>
          <a className="text-sm underline hover:no-underline" href="#top">
            Back to top
          </a>
        </div>
      </section>

      <section id="backend" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-medium">Backend: JWT Auth Middleware</h2>
          <p className="text-muted-foreground max-w-3xl">
            Ian also worked on the backend and contributed to the JSON Web Token middleware that powers identity verification across our services. By cryptographically
            validating each request and attaching decoded user details to the request context, it enables clear
            role-based authorization paths (for example, admin vs staff vs student). That separation simplifies
            permission checks throughout our routes and provides a secure, consistent foundation for user access control.
          </p>
        </div>

        <div className="rounded-md border bg-background">
          <pre className="overflow-auto p-4 text-sm">
            <code>{`const jwt = require('jsonwebtoken');

/**
 * JWT Authentication Middleware
 * Verifies JWT tokens and extracts user information
 */
module.exports = async function requireAuth(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;

    if (!token) {
      return res.status(401).json({ error: 'Missing authorization token' });
    }

    // Cryptographic verification (signature, exp, etc.)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach to request for downstream handlers
    req.user = decoded;
    return next();

  } catch (err) {
    console.error('JWT verification error:', err.message);

    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    } else {
      return res.status(401).json({ error: 'Token verification failed' });
    }
  }
};`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}

 


