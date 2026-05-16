import { ZapIcon } from "lucide-react";

const Ratelimited = () => {
  return (
    // Changed max-w-6xl to max-w-lg for a more compact feel
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="bg-primary/10 border border-primary/30 rounded-2xl shadow-sm">
        <div className="flex flex-col sm:flex-row items-center p-6 gap-4">
          <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
            <ZapIcon className="size-8 text-primary" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold">Rate Limit Reached</h3>
            <p className="text-sm text-base-content/80">
              Too many requests. Please wait a moment before trying again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratelimited;